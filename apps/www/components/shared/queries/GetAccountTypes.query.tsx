import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GET_ACCOUNT_TYPES = gql`
  query getAccountTypes {
    AccountTypes {
      createdAt
      icon
      id
      name
    }
  }
`;

export interface GetAccountTypesQueryProps<T = {}> {
  Component: React.FC<{ accountTypes: { id: number; name: string }[] } & T>;
  Error?: React.FC<{ error: Error }>;
  Loading?: React.FC;
  componentProps?: T;
}

export const GetAccountTypesQuery = ({
  Component,
  Loading,
  Error,
  componentProps,
}: GetAccountTypesQueryProps) => {
  const { loading, error, data } = useQuery(GET_ACCOUNT_TYPES);

  if (loading || error) {
    if (loading && Loading) {
      return <Loading />;
    } else if (error && Error) {
      return <Error error={error} />;
    } else {
      return null;
    }
  }

  const props = { accountTypes: data, ...componentProps };

  return <Component {...props} />;
};
