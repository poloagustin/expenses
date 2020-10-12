import React from 'react';
import {
  GetAccountByIdQuery,
  useGetAccountByIdQuery,
} from '../../generated/graphql';
import { useRouter } from 'next/router';
import { withAuthenticated } from '../../hoc/withAuthenticated';
import { withApollo } from '../../hoc/withApollo';
import Async from '../../components/shared/Async';
import EditAccount from '../../components/accounts/EditAccount';

const EditAccountPage = () => {
  const router = useRouter();
  const result = useGetAccountByIdQuery({
    variables: { id: +router.query.accountId },
  });

  return (
    <Async<GetAccountByIdQuery>
      loading={result.loading}
      error={result.error}
      data={result.data}
      dataKey="Accounts_by_pk"
      Component={EditAccount}
    />
  );
};

const AuthenticatedEditAccountPage = withAuthenticated(EditAccountPage);

export default withApollo()(AuthenticatedEditAccountPage);
