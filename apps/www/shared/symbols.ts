import { ApolloClient } from '@apollo/client';
import { Accounts } from '../generated/graphql';

export type TApolloClient<TCacheShape> = ApolloClient<TCacheShape>;

export interface BaseEntity<T = string> {
  id: T;
  createdAt: string;
  createdBy: string;
}

export interface KeyValue extends BaseEntity {
  name: string;
}

export type ExpenseType = KeyValue;

export interface Expense extends KeyValue {
  createdAt: string;
  createdBy: string;
  type: string;
  amount: number;
}

export type CreateEntity<T extends BaseEntity<TId>, TId = string> = Omit<
  T,
  'id' | 'createdAt' | 'createdBy'
>;

export type PaymentStatusCleared = 0;
export type PaymentStatusReconciled = 1;
export type PaymentStatusUncleared = 2;

export type PaymentStatus =
  | PaymentStatusCleared
  | PaymentStatusReconciled
  | PaymentStatusUncleared;

export type RecordTypeExpense = 0;
export type RecordTypeIncome = 1;
export type RecordTypeTransfer = 2;

export type RecordType =
  | RecordTypeExpense
  | RecordTypeIncome
  | RecordTypeTransfer;

export type NewAccount = Omit<CreateEntity<Accounts, number>, 'updatedAt'>;

export interface FormControlProps<T = number> {
  value: T;
  setValue: (value: T) => void;
}
