import React from 'react';

import Container from '@material-ui/core/Container';
import { withApollo } from '../../hoc/withApollo';
import { withAuthenticated } from '../../hoc/withAuthenticated';
import List from '@material-ui/core/List';
import {
  useGetAccountsQuery,
  Accounts,
  useDeleteAccountMutation,
  GetAccountsQuery,
} from '../../generated/graphql';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import { GET_ACCOUNTS } from '../../graphql/queries';

const AccountListItem = ({
  account,
  edit,
  remove,
}: {
  account: Accounts;
  edit: () => void;
  remove: () => {};
}) => (
  <>
    <ListItem>
      <ListItemText>{account.name}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={remove}>
          <DeleteIcon />
        </IconButton>
        <IconButton edge="end" aria-label="edit" onClick={edit}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
  </>
);

const AccountsPage = () => {
  const { loading, error, data } = useGetAccountsQuery();
  const router = useRouter();
  const [deleteAccount] = useDeleteAccountMutation({
    update: (cache, mutationResult) => {
      const existingAccounts: GetAccountsQuery = cache.readQuery({
        query: GET_ACCOUNTS,
      });
      const Accounts = existingAccounts.Accounts.filter(
        (account) => account.id === mutationResult.data.delete_Accounts_by_pk.id
      );
      cache.writeQuery({
        query: GET_ACCOUNTS,
        data: { Accounts },
      });
    },
  });

  const handleEdit = (account: Accounts) =>
    router.push(`/accounts/${account.id}`);
  const handleRemove = async (account: Accounts) => {
    await deleteAccount({ variables: { id: account.id } });
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push('/accounts/new')}
      >
        Create
      </Button>
      <List>
        {data.Accounts.map((account) => (
          <AccountListItem
            key={account.id}
            account={account}
            edit={() => handleEdit(account)}
            remove={() => handleRemove(account)}
          />
        ))}
      </List>
    </Container>
  );
};

const AuthenticatedAccounts = withAuthenticated(AccountsPage);

export default withApollo()(AuthenticatedAccounts);
