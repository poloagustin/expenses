import fetch from 'isomorphic-unfetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NormalizedCacheObject } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import auth0 from './auth0';
import { ServerError } from 'apollo-link-http-common';
import { ApolloLink } from 'apollo-boost';
import getConfig from 'next/config';

const publicRuntimeConfig = getConfig().publicRuntimeConfig;
const { subscriptionUri, appHost } = publicRuntimeConfig;

let accessToken = null;

const requestAccessToken = async () => {
  if (accessToken) return;
  const res = await fetch(`${appHost}/api/session`);
  if (res.ok) {
    const json = await res.json();
    accessToken = json.accessToken;
  } else {
    accessToken = 'public';
  }
};

const isServerError = (obj: any): obj is ServerError =>
  obj && obj.name === 'ServerError';

// remove cached token on 401 from the server
const resetTokenLink = onError(({ networkError }) => {
  if (isServerError(networkError) && networkError.statusCode === 401) {
    accessToken = null;
  }
});

const createHttpLink = (headers: any) => {
  const httpLink = new HttpLink({
    uri: process.env.NX_BACKEND_URI,
    credentials: 'include',
    headers, // auth token is fetched on the server side
    fetch,
  });
  return httpLink;
};

const createWSLink = () => {
  return new WebSocketLink(
    new SubscriptionClient(subscriptionUri, {
      lazy: true,
      reconnect: true,
      connectionParams: async () => {
        await requestAccessToken(); // happens on the client
        const authorization = accessToken ? `Bearer ${accessToken}` : '';
        console.log('Authorization Header', authorization);
        return { headers: { authorization } };
      },
    })
  );
};

export default function createApolloClient(
  initialState: NormalizedCacheObject,
  headers: any
) {
  const ssrMode = typeof window === 'undefined';
  let link: ApolloLink;
  if (ssrMode) {
    link = createHttpLink(headers); // executed on server
  } else {
    link = createWSLink(); // executed on client
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
