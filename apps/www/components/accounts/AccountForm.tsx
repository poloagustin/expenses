import React, { Dispatch, FormEvent, SetStateAction } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import AccountColorPicker from '../../components/accounts/AccountColorPicker';
import AccountTypesSelect from '../../components/accounts/AccountTypesSelect';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CurrenciesSelect from '../../components/shared/CurrenciesSelect';
import CreditCardFields from '../../components/accounts/CreditCardFields';
import { NewAccount } from '../../shared/symbols';

export interface AccountFormProps {
  account: NewAccount;
  setAccount: Dispatch<SetStateAction<NewAccount>>;
  submit: () => void;
  isNew: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      '& *': {
        marginBottom: '.5rem',
      },
    },
  })
);

const AccountForm = ({
  account,
  setAccount,
  submit,
  isNew,
}: AccountFormProps) => {
  const classes = useStyles();

  const handleFieldChange = (field: keyof NewAccount) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (field) {
      case 'name':
        return setAccount({ ...account, name: event.target.value });
      case 'amount':
      case 'limit':
      case 'currencyId':
      case 'accountTypeId':
      case 'dueDay':
        return setAccount({ ...account, [field]: +event.target.value });
    }
  };

  const handleRawFieldChange = <T extends keyof NewAccount>(field: T) => (
    value: NewAccount[T]
  ) => setAccount((_account) => ({ ..._account, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log('submit', event);
    event.preventDefault();
    submit();
  };

  return (
    <Container maxWidth="lg">
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          required
          id="name"
          label="Name"
          type="text"
          value={account.name}
          onChange={handleFieldChange('name')}
        />
        <AccountColorPicker
          value={account.color}
          setValue={handleRawFieldChange('color')}
        />
        <AccountTypesSelect
          value={account.accountTypeId}
          setValue={handleRawFieldChange('accountTypeId')}
        />
        {isNew && (
          <TextField
            required
            id="amount"
            label="Starting amount"
            type="number"
            value={`${account.amount === null ? '' : account.amount}`}
            onChange={handleFieldChange('amount')}
          />
        )}
        <CurrenciesSelect
          value={account.currencyId}
          setValue={handleRawFieldChange('currencyId')}
        />
        <CreditCardFields account={account} setAccount={setAccount} />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default AccountForm;
