import { gql } from '@apollo/react-hooks';

export const GET_ACCOUNT_TYPES = gql`
  query getAccountTypes {
    AccountTypes {
      createdAt
      icon
      id
      name
    }
  }
`;

export const GET_ACCOUNTS = gql`
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

export const GET_CURRENCIES = gql`
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

export const GET_PAYMENT_TYPES = gql`
  query getPaymentTypes {
    PaymentTypes {
      createdAt
      id
      name
    }
  }
`;

export const GET_RECORD_CATEGORIES = gql`
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

export const GET_RECORDS = gql`
  query getRecords($limit: Int = 10, $offset: Int = 0) {
    Records(limit: $limit, offset: $offset, order_by: { createdAt: desc }) {
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
