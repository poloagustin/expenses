import { gql } from '@apollo/react-hooks';

export const ADD_ACCOUNT = gql`
  mutation AddAccount(
    $accountTypeId: Int!
    $amount: money!
    $color: String!
    $currencyId: Int!
    $dueDay: Int = null
    $limit: money = null
    $name: String!
  ) {
    insert_Accounts_one(
      object: {
        accountTypeId: $accountTypeId
        amount: $amount
        color: $color
        currencyId: $currencyId
        dueDay: $dueDay
        limit: $limit
        name: $name
      }
    ) {
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

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount($id: Int!) {
    delete_Accounts_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_ACCOUNT_BY_ID = gql`
  mutation updateAccount(
    $id: Int!
    $accountTypeId: Int!
    $color: String!
    $currencyId: Int!
    $dueDay: Int!
    $limit: money = null
    $name: String!
  ) {
    update_Accounts_by_pk(
      pk_columns: { id: $id }
      _set: {
        accountTypeId: $accountTypeId
        color: $color
        currencyId: $currencyId
        dueDay: $dueDay
        limit: $limit
        name: $name
      }
    ) {
      accountTypeId
      amount
      color
      createdAt
      createdBy
      currencyId
      dueDay
      id
      limit
      updatedAt
      name
    }
  }
`;
