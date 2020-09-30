import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { CreateEntity, Expense } from '../shared/symbols';
import { buildCreateEntityExpense } from '../shared/builders';
import useExpenseTypes from '../shared/use-expense-types.hook';
import { withApollo } from '../hoc/withApollo';
import { useQuery } from '@apollo/react-hooks';
import { useIndexStyles } from '../styles';
import { AccountTypesSelect } from '../components/index/AccountTypesSelect';
import { withAuthenticated } from '../hoc/withAuthenticated';

const Index = () => {
  const classes = useIndexStyles();

  const [expense, setExpense] = useState<CreateEntity<Expense>>(
    buildCreateEntityExpense()
  );
  const [accountType, setAccountType] = useState('');
  // const handleControlChange = (field: keyof CreateEntity<Expense>) => (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>
  // ) => {
  //   setExpense((_expense) => {
  //     switch (field) {
  //       case 'amount':
  //         return { ..._expense, amount: +event.target.value };
  //       default:
  //         return { ..._expense, [field]: `${event.target.value}` };
  //     }
  //   });
  // };

  // const [expenseTypes] = useExpenseTypes();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <AccountTypesSelect value={accountType} setValue={setAccountType} />
      {/* <TextField
        id="name"
        label="Descripcion del gasto"
        type="text"
        value={expense.name}
        onChange={handleControlChange('name')}
      />
      <TextField
        id="amount"
        label="Monto"
        type="number"
        value={expense.amount}
        onChange={handleControlChange('amount')}
      /> */}
    </form>
  );
};

const AuthenticatedIndex = withAuthenticated(Index);

export default withApollo()(AuthenticatedIndex);
