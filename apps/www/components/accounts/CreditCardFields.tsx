import TextField from '@material-ui/core/TextField';
import React from 'react';
import { NewAccount } from '../../shared/symbols';
import { useGetAccountTypesQuery } from '../../generated/graphql';

export interface CreditCardFieldsProps {
  account: NewAccount;
  setAccount: (account: NewAccount) => void;
}

const CreditCardFields = ({ account, setAccount }: CreditCardFieldsProps) => {
  const { data, loading, error } = useGetAccountTypesQuery();

  if (
    loading ||
    error ||
    (data &&
      !data.AccountTypes.some(
        (accountType) =>
          accountType.name === 'Credit Card' &&
          accountType.id === account.accountTypeId
      ))
  ) {
    return null;
  }

  return (
    <>
      <TextField
        required
        id="limit"
        label="Limit"
        type="number"
        value={`${account.limit === null ? '' : account.limit}`}
        onChange={(event) =>
          setAccount({ ...account, limit: +event.target.value })
        }
      />
      <TextField
        required
        id="due-day"
        label="Due day"
        type="number"
        value={`${account.dueDay === null ? '' : account.dueDay}`}
        onChange={(event) =>
          setAccount({ ...account, dueDay: +event.target.value })
        }
      />
    </>
  );
};

export default CreditCardFields;
