import { CreateEntity, Expense, NewAccount } from './symbols';

export const buildObject = <T extends {}>(defaultValue: T) => (
  defaults?: Partial<T>
) => ({ ...defaultValue, defaults });

export const buildCreateEntityExpense = buildObject<CreateEntity<Expense>>({
  type: '',
  amount: 0,
  name: '',
});

export const buildNewAccount = buildObject<NewAccount>({
  name: '',
  accountTypeId: null,
  amount: null,
  currencyId: null,
  dueDay: null,
  limit: null,
  color: '',
});
