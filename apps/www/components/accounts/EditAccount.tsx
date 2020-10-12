import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Accounts,
  GetAccountsQuery,
  useUpdateAccountMutation,
} from '../../generated/graphql';
import { GET_ACCOUNTS } from '../../graphql/queries';
import { buildNewAccount } from '../../shared/builders';
import { NewAccount } from '../../shared/symbols';
import AccountForm from './AccountForm';

export interface EditAccountProps {
  data: Accounts;
}

const EditAccount = ({ data }: EditAccountProps) => {
  const router = useRouter();
  const [account, setAccount] = useState<NewAccount>(
    buildNewAccount({
      accountTypeId: data.accountTypeId,
      amount: data.amount,
      color: data.color,
      currencyId: data.currencyId,
      dueDay: data.dueDay,
      limit: data.limit,
      name: data.name,
    })
  );
  const [updateAccount] = useUpdateAccountMutation({
    update: (cache, mutationResult) => {
      const existingAccounts: GetAccountsQuery = cache.readQuery({
        query: GET_ACCOUNTS,
      });
      const data = mutationResult.data.update_Accounts_by_pk;
      const Accounts = existingAccounts.Accounts.filter((account) =>
        account.id === data.id ? data : account
      );
      cache.writeQuery({
        query: GET_ACCOUNTS,
        data: { Accounts },
      });
    },
  });

  const handleSubmit = async () => {
    await updateAccount({
      variables: {
        id: data.id,
        accountTypeId: account.accountTypeId,
        color: account.color,
        currencyId: account.currencyId,
        dueDay: account.dueDay,
        limit: account.limit,
        name: account.name,
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

export default EditAccount;
