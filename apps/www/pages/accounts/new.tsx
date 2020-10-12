import React, { useState } from 'react';
import { withApollo } from '../../hoc/withApollo';
import { withAuthenticated } from '../../hoc/withAuthenticated';
import { NewAccount } from '../../shared/symbols';
import { buildNewAccount } from '../../shared/builders';
import { useAddAccountMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';
import AccountForm from '../../components/accounts/AccountForm';

const NewAccountPage = () => {
  const [account, setAccount] = useState<NewAccount>(buildNewAccount());
  const [addAccount] = useAddAccountMutation({});
  const router = useRouter();

  const handleSubmit = async () => {
    const {
      accountTypeId,
      amount,
      color,
      currencyId,
      dueDay,
      limit,
      name,
    } = account;
    await addAccount({
      variables: {
        accountTypeId,
        amount,
        color,
        currencyId,
        dueDay,
        limit,
        name,
      },
    });
    router.push('/accounts');
  };

  return (
    <AccountForm
      account={account}
      setAccount={setAccount}
      submit={handleSubmit}
    />
  );
};

const AuthenticatedNewAccount = withAuthenticated(NewAccountPage);

export default withApollo()(AuthenticatedNewAccount);
