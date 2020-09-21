import { CreateEntity, Expense } from './symbols';

export const buildObject = <T extends {}>(defaultValue: T) => (
  defaults?: Partial<T>
) => ({ ...defaultValue, defaults });

export const buildCreateEntityExpense = buildObject<CreateEntity<Expense>>({
  type: '',
  amount: 0,
  name: '',
});
