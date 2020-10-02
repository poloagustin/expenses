import React from 'react';

import Container from '@material-ui/core/Container';
import { withApollo } from '../../hoc/withApollo';
import { withAuthenticated } from '../../hoc/withAuthenticated';
import List from '@material-ui/core/List';
import { useGetAccountsQuery, Accounts } from '../../generated/graphql';
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

const AccountListItem = ({ account }: { account: Accounts }) => (
  <>
    <ListItem>
      <ListItemText>{account.name}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton edge="end" aria-label="edit">
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
          <AccountListItem key={account.id} account={account} />
        ))}
      </List>
    </Container>
  );
};

const AuthenticatedAccounts = withAuthenticated(AccountsPage);

export default withApollo()(AuthenticatedAccounts);
