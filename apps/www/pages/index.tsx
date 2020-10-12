import React, { useState } from 'react';
import { CreateEntity, Expense } from '../shared/symbols';
import { buildCreateEntityExpense } from '../shared/builders';
import { withApollo } from '../hoc/withApollo';
import { useIndexStyles } from '../styles';
import { withAuthenticated } from '../hoc/withAuthenticated';

const Index = () => {
  const classes = useIndexStyles();

  const [expense, setExpense] = useState<CreateEntity<Expense>>(
    buildCreateEntityExpense()
  );
  const [accountType, setAccountType] = useState<number>(null);
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
