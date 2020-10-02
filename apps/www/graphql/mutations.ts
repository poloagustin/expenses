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
