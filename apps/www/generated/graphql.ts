import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  money: any;
  timestamptz: any;
};

/** columns and relationships of "AccountTypes" */
export type AccountTypes = {
  __typename?: 'AccountTypes';
  createdAt: Scalars['timestamptz'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "AccountTypes". All fields are combined with a logical 'AND'. */
export type AccountTypesBoolExp = {
  _and?: Maybe<Array<Maybe<AccountTypesBoolExp>>>;
  _not?: Maybe<AccountTypesBoolExp>;
  _or?: Maybe<Array<Maybe<AccountTypesBoolExp>>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  icon?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "AccountTypes" */
export type AccountTypesOrderBy = {
  createdAt?: Maybe<OrderBy>;
  icon?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "AccountTypes" */
export type AccountTypesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "AccountTypes" */
export enum AccountTypesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "Accounts" */
export type Accounts = {
  __typename?: 'Accounts';
  accountTypeId: Scalars['Int'];
  amount: Scalars['money'];
  color: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  currencyId: Scalars['Int'];
  dueDay?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  limit?: Maybe<Scalars['money']>;
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** input type for inserting array relation for remote table "Accounts" */
export type AccountsArrRelInsertInput = {
  data: Array<AccountsInsertInput>;
  on_conflict?: Maybe<AccountsOnConflict>;
};

/** Boolean expression to filter rows from the table "Accounts". All fields are combined with a logical 'AND'. */
export type AccountsBoolExp = {
  _and?: Maybe<Array<Maybe<AccountsBoolExp>>>;
  _not?: Maybe<AccountsBoolExp>;
  _or?: Maybe<Array<Maybe<AccountsBoolExp>>>;
  accountTypeId?: Maybe<IntComparisonExp>;
  amount?: Maybe<MoneyComparisonExp>;
  color?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  createdBy?: Maybe<StringComparisonExp>;
  currencyId?: Maybe<IntComparisonExp>;
  dueDay?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  limit?: Maybe<MoneyComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "Accounts" */
export enum AccountsConstraint {
  /** unique or primary key constraint */
  AccountsNameKey = 'Accounts_name_key',
  /** unique or primary key constraint */
  AccountsPkey = 'Accounts_pkey'
}

/** input type for incrementing integer column in table "Accounts" */
export type AccountsIncInput = {
  accountTypeId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['money']>;
  currencyId?: Maybe<Scalars['Int']>;
  dueDay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['money']>;
};

/** input type for inserting data into table "Accounts" */
export type AccountsInsertInput = {
  accountTypeId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['money']>;
  color?: Maybe<Scalars['String']>;
  currencyId?: Maybe<Scalars['Int']>;
  dueDay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['money']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Accounts" */
export type AccountsMutationResponse = {
  __typename?: 'Accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "Accounts" */
export type AccountsObjRelInsertInput = {
  data: AccountsInsertInput;
  on_conflict?: Maybe<AccountsOnConflict>;
};

/** on conflict condition type for table "Accounts" */
export type AccountsOnConflict = {
  constraint: AccountsConstraint;
  update_columns: Array<AccountsUpdateColumn>;
  where?: Maybe<AccountsBoolExp>;
};

/** ordering options when selecting data from "Accounts" */
export type AccountsOrderBy = {
  accountTypeId?: Maybe<OrderBy>;
  amount?: Maybe<OrderBy>;
  color?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  currencyId?: Maybe<OrderBy>;
  dueDay?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  limit?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "Accounts" */
export type AccountsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "Accounts" */
export enum AccountsSelectColumn {
  /** column name */
  AccountTypeId = 'accountTypeId',
  /** column name */
  Amount = 'amount',
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  DueDay = 'dueDay',
  /** column name */
  Id = 'id',
  /** column name */
  Limit = 'limit',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Accounts" */
export type AccountsSetInput = {
  accountTypeId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['money']>;
  color?: Maybe<Scalars['String']>;
  currencyId?: Maybe<Scalars['Int']>;
  dueDay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['money']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "Accounts" */
export enum AccountsUpdateColumn {
  /** column name */
  AccountTypeId = 'accountTypeId',
  /** column name */
  Amount = 'amount',
  /** column name */
  Color = 'color',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  DueDay = 'dueDay',
  /** column name */
  Id = 'id',
  /** column name */
  Limit = 'limit',
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Currencies" */
export type Currencies = {
  __typename?: 'Currencies';
  createdAt: Scalars['timestamptz'];
  exchangeRate: Scalars['money'];
  id: Scalars['Int'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "Currencies". All fields are combined with a logical 'AND'. */
export type CurrenciesBoolExp = {
  _and?: Maybe<Array<Maybe<CurrenciesBoolExp>>>;
  _not?: Maybe<CurrenciesBoolExp>;
  _or?: Maybe<Array<Maybe<CurrenciesBoolExp>>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  exchangeRate?: Maybe<MoneyComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  isDefault?: Maybe<BooleanComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "Currencies" */
export type CurrenciesOrderBy = {
  createdAt?: Maybe<OrderBy>;
  exchangeRate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isDefault?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "Currencies" */
export type CurrenciesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "Currencies" */
export enum CurrenciesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExchangeRate = 'exchangeRate',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "PaymentTypes" */
export type PaymentTypes = {
  __typename?: 'PaymentTypes';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "PaymentTypes". All fields are combined with a logical 'AND'. */
export type PaymentTypesBoolExp = {
  _and?: Maybe<Array<Maybe<PaymentTypesBoolExp>>>;
  _not?: Maybe<PaymentTypesBoolExp>;
  _or?: Maybe<Array<Maybe<PaymentTypesBoolExp>>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "PaymentTypes" */
export type PaymentTypesOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "PaymentTypes" */
export type PaymentTypesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "PaymentTypes" */
export enum PaymentTypesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "RecordCategories" */
export type RecordCategories = {
  __typename?: 'RecordCategories';
  color: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "RecordCategories". All fields are combined with a logical 'AND'. */
export type RecordCategoriesBoolExp = {
  _and?: Maybe<Array<Maybe<RecordCategoriesBoolExp>>>;
  _not?: Maybe<RecordCategoriesBoolExp>;
  _or?: Maybe<Array<Maybe<RecordCategoriesBoolExp>>>;
  color?: Maybe<StringComparisonExp>;
  icon?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  parent?: Maybe<IntComparisonExp>;
};

/** ordering options when selecting data from "RecordCategories" */
export type RecordCategoriesOrderBy = {
  color?: Maybe<OrderBy>;
  icon?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent?: Maybe<OrderBy>;
};

/** primary key columns input for table: "RecordCategories" */
export type RecordCategoriesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "RecordCategories" */
export enum RecordCategoriesSelectColumn {
  /** column name */
  Color = 'color',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Parent = 'parent'
}

/** columns and relationships of "Records" */
export type Records = {
  __typename?: 'Records';
  accountIdFrom: Scalars['Int'];
  accountIdTo: Scalars['Int'];
  amount: Scalars['money'];
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  currencyId: Scalars['Int'];
  date: Scalars['date'];
  id: Scalars['bigint'];
  note?: Maybe<Scalars['String']>;
  payee?: Maybe<Scalars['String']>;
  paymentStatus: Scalars['Int'];
  paymentTypeId: Scalars['Int'];
  recordCategoryId: Scalars['Int'];
  type: Scalars['Int'];
};

/** input type for inserting array relation for remote table "Records" */
export type RecordsArrRelInsertInput = {
  data: Array<RecordsInsertInput>;
  on_conflict?: Maybe<RecordsOnConflict>;
};

/** Boolean expression to filter rows from the table "Records". All fields are combined with a logical 'AND'. */
export type RecordsBoolExp = {
  _and?: Maybe<Array<Maybe<RecordsBoolExp>>>;
  _not?: Maybe<RecordsBoolExp>;
  _or?: Maybe<Array<Maybe<RecordsBoolExp>>>;
  accountIdFrom?: Maybe<IntComparisonExp>;
  accountIdTo?: Maybe<IntComparisonExp>;
  amount?: Maybe<MoneyComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  createdBy?: Maybe<StringComparisonExp>;
  currencyId?: Maybe<IntComparisonExp>;
  date?: Maybe<DateComparisonExp>;
  id?: Maybe<BigintComparisonExp>;
  note?: Maybe<StringComparisonExp>;
  payee?: Maybe<StringComparisonExp>;
  paymentStatus?: Maybe<IntComparisonExp>;
  paymentTypeId?: Maybe<IntComparisonExp>;
  recordCategoryId?: Maybe<IntComparisonExp>;
  type?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "Records" */
export enum RecordsConstraint {
  /** unique or primary key constraint */
  RecordsPkey = 'Records_pkey'
}

/** input type for incrementing integer column in table "Records" */
export type RecordsIncInput = {
  accountIdFrom?: Maybe<Scalars['Int']>;
  accountIdTo?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['money']>;
  currencyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  paymentStatus?: Maybe<Scalars['Int']>;
  paymentTypeId?: Maybe<Scalars['Int']>;
  recordCategoryId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Records" */
export type RecordsInsertInput = {
  accountIdFrom?: Maybe<Scalars['Int']>;
  accountIdTo?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['money']>;
  currencyId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  payee?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['Int']>;
  paymentTypeId?: Maybe<Scalars['Int']>;
  recordCategoryId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "Records" */
export type RecordsMutationResponse = {
  __typename?: 'Records_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Records>;
};

/** input type for inserting object relation for remote table "Records" */
export type RecordsObjRelInsertInput = {
  data: RecordsInsertInput;
  on_conflict?: Maybe<RecordsOnConflict>;
};

/** on conflict condition type for table "Records" */
export type RecordsOnConflict = {
  constraint: RecordsConstraint;
  update_columns: Array<RecordsUpdateColumn>;
  where?: Maybe<RecordsBoolExp>;
};

/** ordering options when selecting data from "Records" */
export type RecordsOrderBy = {
  accountIdFrom?: Maybe<OrderBy>;
  accountIdTo?: Maybe<OrderBy>;
  amount?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  currencyId?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  note?: Maybe<OrderBy>;
  payee?: Maybe<OrderBy>;
  paymentStatus?: Maybe<OrderBy>;
  paymentTypeId?: Maybe<OrderBy>;
  recordCategoryId?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
};

/** primary key columns input for table: "Records" */
export type RecordsPkColumnsInput = {
  id: Scalars['bigint'];
};

/** select columns of table "Records" */
export enum RecordsSelectColumn {
  /** column name */
  AccountIdFrom = 'accountIdFrom',
  /** column name */
  AccountIdTo = 'accountIdTo',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Payee = 'payee',
  /** column name */
  PaymentStatus = 'paymentStatus',
  /** column name */
  PaymentTypeId = 'paymentTypeId',
  /** column name */
  RecordCategoryId = 'recordCategoryId',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "Records" */
export type RecordsSetInput = {
  accountIdFrom?: Maybe<Scalars['Int']>;
  accountIdTo?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['money']>;
  currencyId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  payee?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['Int']>;
  paymentTypeId?: Maybe<Scalars['Int']>;
  recordCategoryId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** update columns of table "Records" */
export enum RecordsUpdateColumn {
  /** column name */
  AccountIdFrom = 'accountIdFrom',
  /** column name */
  AccountIdTo = 'accountIdTo',
  /** column name */
  Amount = 'amount',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Payee = 'payee',
  /** column name */
  PaymentStatus = 'paymentStatus',
  /** column name */
  PaymentTypeId = 'paymentTypeId',
  /** column name */
  RecordCategoryId = 'recordCategoryId',
  /** column name */
  Type = 'type'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};


/** expression to compare columns of type money. All fields are combined with logical 'AND'. */
export type MoneyComparisonExp = {
  _eq?: Maybe<Scalars['money']>;
  _gt?: Maybe<Scalars['money']>;
  _gte?: Maybe<Scalars['money']>;
  _in?: Maybe<Array<Scalars['money']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['money']>;
  _lte?: Maybe<Scalars['money']>;
  _neq?: Maybe<Scalars['money']>;
  _nin?: Maybe<Array<Scalars['money']>>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Accounts" */
  delete_Accounts?: Maybe<AccountsMutationResponse>;
  /** delete single row from the table: "Accounts" */
  delete_Accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "Records" */
  delete_Records?: Maybe<RecordsMutationResponse>;
  /** delete single row from the table: "Records" */
  delete_Records_by_pk?: Maybe<Records>;
  /** insert data into the table: "Accounts" */
  insert_Accounts?: Maybe<AccountsMutationResponse>;
  /** insert a single row into the table: "Accounts" */
  insert_Accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "Records" */
  insert_Records?: Maybe<RecordsMutationResponse>;
  /** insert a single row into the table: "Records" */
  insert_Records_one?: Maybe<Records>;
  /** update data of the table: "Accounts" */
  update_Accounts?: Maybe<AccountsMutationResponse>;
  /** update single row of the table: "Accounts" */
  update_Accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "Records" */
  update_Records?: Maybe<RecordsMutationResponse>;
  /** update single row of the table: "Records" */
  update_Records_by_pk?: Maybe<Records>;
};


/** mutation root */
export type MutationRootDeleteAccountsArgs = {
  where: AccountsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAccountsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteRecordsArgs = {
  where: RecordsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRecordsByPkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type MutationRootInsertAccountsArgs = {
  objects: Array<AccountsInsertInput>;
  on_conflict?: Maybe<AccountsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAccountsOneArgs = {
  object: AccountsInsertInput;
  on_conflict?: Maybe<AccountsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRecordsArgs = {
  objects: Array<RecordsInsertInput>;
  on_conflict?: Maybe<RecordsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRecordsOneArgs = {
  object: RecordsInsertInput;
  on_conflict?: Maybe<RecordsOnConflict>;
};


/** mutation root */
export type MutationRootUpdateAccountsArgs = {
  _inc?: Maybe<AccountsIncInput>;
  _set?: Maybe<AccountsSetInput>;
  where: AccountsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAccountsByPkArgs = {
  _inc?: Maybe<AccountsIncInput>;
  _set?: Maybe<AccountsSetInput>;
  pk_columns: AccountsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRecordsArgs = {
  _inc?: Maybe<RecordsIncInput>;
  _set?: Maybe<RecordsSetInput>;
  where: RecordsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRecordsByPkArgs = {
  _inc?: Maybe<RecordsIncInput>;
  _set?: Maybe<RecordsSetInput>;
  pk_columns: RecordsPkColumnsInput;
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "AccountTypes" */
  AccountTypes: Array<AccountTypes>;
  /** fetch data from the table: "AccountTypes" using primary key columns */
  AccountTypes_by_pk?: Maybe<AccountTypes>;
  /** fetch data from the table: "Accounts" */
  Accounts: Array<Accounts>;
  /** fetch data from the table: "Accounts" using primary key columns */
  Accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "Currencies" */
  Currencies: Array<Currencies>;
  /** fetch data from the table: "Currencies" using primary key columns */
  Currencies_by_pk?: Maybe<Currencies>;
  /** fetch data from the table: "PaymentTypes" */
  PaymentTypes: Array<PaymentTypes>;
  /** fetch data from the table: "PaymentTypes" using primary key columns */
  PaymentTypes_by_pk?: Maybe<PaymentTypes>;
  /** fetch data from the table: "RecordCategories" */
  RecordCategories: Array<RecordCategories>;
  /** fetch data from the table: "RecordCategories" using primary key columns */
  RecordCategories_by_pk?: Maybe<RecordCategories>;
  /** fetch data from the table: "Records" */
  Records: Array<Records>;
  /** fetch data from the table: "Records" using primary key columns */
  Records_by_pk?: Maybe<Records>;
};


/** query root */
export type QueryRootAccountTypesArgs = {
  distinct_on?: Maybe<Array<AccountTypesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountTypesOrderBy>>;
  where?: Maybe<AccountTypesBoolExp>;
};


/** query root */
export type QueryRootAccountTypesByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootAccountsArgs = {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountsOrderBy>>;
  where?: Maybe<AccountsBoolExp>;
};


/** query root */
export type QueryRootAccountsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootCurrenciesArgs = {
  distinct_on?: Maybe<Array<CurrenciesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CurrenciesOrderBy>>;
  where?: Maybe<CurrenciesBoolExp>;
};


/** query root */
export type QueryRootCurrenciesByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootPaymentTypesArgs = {
  distinct_on?: Maybe<Array<PaymentTypesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentTypesOrderBy>>;
  where?: Maybe<PaymentTypesBoolExp>;
};


/** query root */
export type QueryRootPaymentTypesByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootRecordCategoriesArgs = {
  distinct_on?: Maybe<Array<RecordCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RecordCategoriesOrderBy>>;
  where?: Maybe<RecordCategoriesBoolExp>;
};


/** query root */
export type QueryRootRecordCategoriesByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootRecordsArgs = {
  distinct_on?: Maybe<Array<RecordsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RecordsOrderBy>>;
  where?: Maybe<RecordsBoolExp>;
};


/** query root */
export type QueryRootRecordsByPkArgs = {
  id: Scalars['bigint'];
};

/** subscription root */
export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "AccountTypes" */
  AccountTypes: Array<AccountTypes>;
  /** fetch data from the table: "AccountTypes" using primary key columns */
  AccountTypes_by_pk?: Maybe<AccountTypes>;
  /** fetch data from the table: "Accounts" */
  Accounts: Array<Accounts>;
  /** fetch data from the table: "Accounts" using primary key columns */
  Accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "Currencies" */
  Currencies: Array<Currencies>;
  /** fetch data from the table: "Currencies" using primary key columns */
  Currencies_by_pk?: Maybe<Currencies>;
  /** fetch data from the table: "PaymentTypes" */
  PaymentTypes: Array<PaymentTypes>;
  /** fetch data from the table: "PaymentTypes" using primary key columns */
  PaymentTypes_by_pk?: Maybe<PaymentTypes>;
  /** fetch data from the table: "RecordCategories" */
  RecordCategories: Array<RecordCategories>;
  /** fetch data from the table: "RecordCategories" using primary key columns */
  RecordCategories_by_pk?: Maybe<RecordCategories>;
  /** fetch data from the table: "Records" */
  Records: Array<Records>;
  /** fetch data from the table: "Records" using primary key columns */
  Records_by_pk?: Maybe<Records>;
};


/** subscription root */
export type SubscriptionRootAccountTypesArgs = {
  distinct_on?: Maybe<Array<AccountTypesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountTypesOrderBy>>;
  where?: Maybe<AccountTypesBoolExp>;
};


/** subscription root */
export type SubscriptionRootAccountTypesByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootAccountsArgs = {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountsOrderBy>>;
  where?: Maybe<AccountsBoolExp>;
};


/** subscription root */
export type SubscriptionRootAccountsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootCurrenciesArgs = {
  distinct_on?: Maybe<Array<CurrenciesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CurrenciesOrderBy>>;
  where?: Maybe<CurrenciesBoolExp>;
};


/** subscription root */
export type SubscriptionRootCurrenciesByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootPaymentTypesArgs = {
  distinct_on?: Maybe<Array<PaymentTypesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentTypesOrderBy>>;
  where?: Maybe<PaymentTypesBoolExp>;
};


/** subscription root */
export type SubscriptionRootPaymentTypesByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootRecordCategoriesArgs = {
  distinct_on?: Maybe<Array<RecordCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RecordCategoriesOrderBy>>;
  where?: Maybe<RecordCategoriesBoolExp>;
};


/** subscription root */
export type SubscriptionRootRecordCategoriesByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootRecordsArgs = {
  distinct_on?: Maybe<Array<RecordsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RecordsOrderBy>>;
  where?: Maybe<RecordsBoolExp>;
};


/** subscription root */
export type SubscriptionRootRecordsByPkArgs = {
  id: Scalars['bigint'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type AddAccountMutationVariables = Exact<{
  accountTypeId: Scalars['Int'];
  amount: Scalars['money'];
  color: Scalars['String'];
  currencyId: Scalars['Int'];
  dueDay?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['money']>;
  name: Scalars['String'];
}>;


export type AddAccountMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Accounts_one?: Maybe<(
    { __typename?: 'Accounts' }
    & Pick<Accounts, 'accountTypeId' | 'amount' | 'color' | 'createdAt' | 'createdBy' | 'currencyId' | 'dueDay' | 'id' | 'limit' | 'name' | 'updatedAt'>
  )> }
);

export type GetAccountTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountTypesQuery = (
  { __typename?: 'query_root' }
  & { AccountTypes: Array<(
    { __typename?: 'AccountTypes' }
    & Pick<AccountTypes, 'createdAt' | 'icon' | 'id' | 'name'>
  )> }
);

export type GetAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountsQuery = (
  { __typename?: 'query_root' }
  & { Accounts: Array<(
    { __typename?: 'Accounts' }
    & Pick<Accounts, 'accountTypeId' | 'amount' | 'createdAt' | 'currencyId' | 'createdBy' | 'dueDay' | 'id' | 'limit' | 'name' | 'updatedAt' | 'color'>
  )> }
);

export type GetCurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrenciesQuery = (
  { __typename?: 'query_root' }
  & { Currencies: Array<(
    { __typename?: 'Currencies' }
    & Pick<Currencies, 'name' | 'isDefault' | 'id' | 'exchangeRate' | 'createdAt'>
  )> }
);

export type GetPaymentTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentTypesQuery = (
  { __typename?: 'query_root' }
  & { PaymentTypes: Array<(
    { __typename?: 'PaymentTypes' }
    & Pick<PaymentTypes, 'createdAt' | 'id' | 'name'>
  )> }
);

export type GetRecordCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecordCategoriesQuery = (
  { __typename?: 'query_root' }
  & { RecordCategories: Array<(
    { __typename?: 'RecordCategories' }
    & Pick<RecordCategories, 'color' | 'icon' | 'id' | 'name' | 'parent'>
  )> }
);

export type GetRecordsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetRecordsQuery = (
  { __typename?: 'query_root' }
  & { Records: Array<(
    { __typename?: 'Records' }
    & Pick<Records, 'accountIdFrom' | 'accountIdTo' | 'amount' | 'createdAt' | 'createdBy' | 'currencyId' | 'date' | 'id' | 'note' | 'payee' | 'paymentStatus' | 'paymentTypeId' | 'recordCategoryId' | 'type'>
  )> }
);


export const AddAccountDocument = gql`
    mutation AddAccount($accountTypeId: Int!, $amount: money!, $color: String!, $currencyId: Int!, $dueDay: Int = null, $limit: money = null, $name: String!) {
  insert_Accounts_one(object: {accountTypeId: $accountTypeId, amount: $amount, color: $color, currencyId: $currencyId, dueDay: $dueDay, limit: $limit, name: $name}) {
    accountTypeId
    amount
    color
    createdAt
    createdBy
    currencyId
    dueDay
    id
    limit
    name
    updatedAt
  }
}
    `;
export type AddAccountMutationFn = Apollo.MutationFunction<AddAccountMutation, AddAccountMutationVariables>;

/**
 * __useAddAccountMutation__
 *
 * To run a mutation, you first call `useAddAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAccountMutation, { data, loading, error }] = useAddAccountMutation({
 *   variables: {
 *      accountTypeId: // value for 'accountTypeId'
 *      amount: // value for 'amount'
 *      color: // value for 'color'
 *      currencyId: // value for 'currencyId'
 *      dueDay: // value for 'dueDay'
 *      limit: // value for 'limit'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddAccountMutation(baseOptions?: Apollo.MutationHookOptions<AddAccountMutation, AddAccountMutationVariables>) {
        return Apollo.useMutation<AddAccountMutation, AddAccountMutationVariables>(AddAccountDocument, baseOptions);
      }
export type AddAccountMutationHookResult = ReturnType<typeof useAddAccountMutation>;
export type AddAccountMutationResult = Apollo.MutationResult<AddAccountMutation>;
export type AddAccountMutationOptions = Apollo.BaseMutationOptions<AddAccountMutation, AddAccountMutationVariables>;
export const GetAccountTypesDocument = gql`
    query getAccountTypes {
  AccountTypes {
    createdAt
    icon
    id
    name
  }
}
    `;

/**
 * __useGetAccountTypesQuery__
 *
 * To run a query within a React component, call `useGetAccountTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetAccountTypesQuery, GetAccountTypesQueryVariables>) {
        return Apollo.useQuery<GetAccountTypesQuery, GetAccountTypesQueryVariables>(GetAccountTypesDocument, baseOptions);
      }
export function useGetAccountTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountTypesQuery, GetAccountTypesQueryVariables>) {
          return Apollo.useLazyQuery<GetAccountTypesQuery, GetAccountTypesQueryVariables>(GetAccountTypesDocument, baseOptions);
        }
export type GetAccountTypesQueryHookResult = ReturnType<typeof useGetAccountTypesQuery>;
export type GetAccountTypesLazyQueryHookResult = ReturnType<typeof useGetAccountTypesLazyQuery>;
export type GetAccountTypesQueryResult = Apollo.QueryResult<GetAccountTypesQuery, GetAccountTypesQueryVariables>;
export const GetAccountsDocument = gql`
    query getAccounts {
  Accounts {
    accountTypeId
    amount
    createdAt
    currencyId
    createdBy
    dueDay
    id
    limit
    name
    updatedAt
    color
  }
}
    `;

/**
 * __useGetAccountsQuery__
 *
 * To run a query within a React component, call `useGetAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountsQuery(baseOptions?: Apollo.QueryHookOptions<GetAccountsQuery, GetAccountsQueryVariables>) {
        return Apollo.useQuery<GetAccountsQuery, GetAccountsQueryVariables>(GetAccountsDocument, baseOptions);
      }
export function useGetAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountsQuery, GetAccountsQueryVariables>) {
          return Apollo.useLazyQuery<GetAccountsQuery, GetAccountsQueryVariables>(GetAccountsDocument, baseOptions);
        }
export type GetAccountsQueryHookResult = ReturnType<typeof useGetAccountsQuery>;
export type GetAccountsLazyQueryHookResult = ReturnType<typeof useGetAccountsLazyQuery>;
export type GetAccountsQueryResult = Apollo.QueryResult<GetAccountsQuery, GetAccountsQueryVariables>;
export const GetCurrenciesDocument = gql`
    query getCurrencies {
  Currencies {
    name
    isDefault
    id
    exchangeRate
    createdAt
  }
}
    `;

/**
 * __useGetCurrenciesQuery__
 *
 * To run a query within a React component, call `useGetCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrenciesQuery, GetCurrenciesQueryVariables>) {
        return Apollo.useQuery<GetCurrenciesQuery, GetCurrenciesQueryVariables>(GetCurrenciesDocument, baseOptions);
      }
export function useGetCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrenciesQuery, GetCurrenciesQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrenciesQuery, GetCurrenciesQueryVariables>(GetCurrenciesDocument, baseOptions);
        }
export type GetCurrenciesQueryHookResult = ReturnType<typeof useGetCurrenciesQuery>;
export type GetCurrenciesLazyQueryHookResult = ReturnType<typeof useGetCurrenciesLazyQuery>;
export type GetCurrenciesQueryResult = Apollo.QueryResult<GetCurrenciesQuery, GetCurrenciesQueryVariables>;
export const GetPaymentTypesDocument = gql`
    query getPaymentTypes {
  PaymentTypes {
    createdAt
    id
    name
  }
}
    `;

/**
 * __useGetPaymentTypesQuery__
 *
 * To run a query within a React component, call `useGetPaymentTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetPaymentTypesQuery, GetPaymentTypesQueryVariables>) {
        return Apollo.useQuery<GetPaymentTypesQuery, GetPaymentTypesQueryVariables>(GetPaymentTypesDocument, baseOptions);
      }
export function useGetPaymentTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentTypesQuery, GetPaymentTypesQueryVariables>) {
          return Apollo.useLazyQuery<GetPaymentTypesQuery, GetPaymentTypesQueryVariables>(GetPaymentTypesDocument, baseOptions);
        }
export type GetPaymentTypesQueryHookResult = ReturnType<typeof useGetPaymentTypesQuery>;
export type GetPaymentTypesLazyQueryHookResult = ReturnType<typeof useGetPaymentTypesLazyQuery>;
export type GetPaymentTypesQueryResult = Apollo.QueryResult<GetPaymentTypesQuery, GetPaymentTypesQueryVariables>;
export const GetRecordCategoriesDocument = gql`
    query getRecordCategories {
  RecordCategories {
    color
    icon
    id
    name
    parent
  }
}
    `;

/**
 * __useGetRecordCategoriesQuery__
 *
 * To run a query within a React component, call `useGetRecordCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecordCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecordCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecordCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetRecordCategoriesQuery, GetRecordCategoriesQueryVariables>) {
        return Apollo.useQuery<GetRecordCategoriesQuery, GetRecordCategoriesQueryVariables>(GetRecordCategoriesDocument, baseOptions);
      }
export function useGetRecordCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecordCategoriesQuery, GetRecordCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<GetRecordCategoriesQuery, GetRecordCategoriesQueryVariables>(GetRecordCategoriesDocument, baseOptions);
        }
export type GetRecordCategoriesQueryHookResult = ReturnType<typeof useGetRecordCategoriesQuery>;
export type GetRecordCategoriesLazyQueryHookResult = ReturnType<typeof useGetRecordCategoriesLazyQuery>;
export type GetRecordCategoriesQueryResult = Apollo.QueryResult<GetRecordCategoriesQuery, GetRecordCategoriesQueryVariables>;
export const GetRecordsDocument = gql`
    query getRecords($limit: Int = 10, $offset: Int = 0) {
  Records(limit: $limit, offset: $offset, order_by: {createdAt: desc}) {
    accountIdFrom
    accountIdTo
    amount
    createdAt
    createdBy
    currencyId
    date
    id
    note
    payee
    paymentStatus
    paymentTypeId
    recordCategoryId
    type
  }
}
    `;

/**
 * __useGetRecordsQuery__
 *
 * To run a query within a React component, call `useGetRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecordsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetRecordsQuery(baseOptions?: Apollo.QueryHookOptions<GetRecordsQuery, GetRecordsQueryVariables>) {
        return Apollo.useQuery<GetRecordsQuery, GetRecordsQueryVariables>(GetRecordsDocument, baseOptions);
      }
export function useGetRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecordsQuery, GetRecordsQueryVariables>) {
          return Apollo.useLazyQuery<GetRecordsQuery, GetRecordsQueryVariables>(GetRecordsDocument, baseOptions);
        }
export type GetRecordsQueryHookResult = ReturnType<typeof useGetRecordsQuery>;
export type GetRecordsLazyQueryHookResult = ReturnType<typeof useGetRecordsLazyQuery>;
export type GetRecordsQueryResult = Apollo.QueryResult<GetRecordsQuery, GetRecordsQueryVariables>;