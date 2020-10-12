import React from 'react';
import { useGetAccountTypesQuery } from '../../../generated/graphql';

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
  const { loading, error, data } = useGetAccountTypesQuery({});

  if (loading || error) {
    if (loading && Loading) {
      return <Loading />;
    } else if (error && Error) {
      console.error(error);
      return <Error error={error} />;
    } else {
      return null;
    }
  }

  const props = { accountTypes: data.AccountTypes, ...componentProps };

  return <Component {...props} />;
};
