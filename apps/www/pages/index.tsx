import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import './index.scss';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { CreateEntity, Expense } from '../shared/symbols';
import { buildCreateEntityExpense } from '../shared/builders';
import useExpenseTypes from '../shared/use-expense-types.hook';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export const Index = () => {
  const classes = useStyles();
  const [expense, setExpense] = useState<CreateEntity<Expense>>(
    buildCreateEntityExpense()
  );

  const handleControlChange = (field: keyof CreateEntity<Expense>) => (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setExpense((_expense) => {
      switch (field) {
        case 'amount':
          return { ..._expense, amount: +event.target.value };
        default:
          return { ..._expense, [field]: `${event.target.value}` };
      }
    });
  };

  const [expenseTypes] = useExpenseTypes();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel id="type-label">Age</InputLabel>
        <Select
          labelId="type-label"
          id="type-select"
          value={expense.type}
          onChange={handleControlChange('type')}
        >
          {expenseTypes.map((expenseType) => (
            <MenuItem key={expenseType.id} value={expenseType.id}>
              {expenseType.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
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
      />
    </form>
  );
};

export default Index;
