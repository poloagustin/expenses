import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useAppStyles } from '../../styles/_app';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { useRouter } from 'next/router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

export interface AppDrawerProps {
  open: boolean;
}

export const AppDrawer = ({ open }: AppDrawerProps) => {
  const classes = useAppStyles();
  const links: {
    path: string;
    label: string;
    icon: typeof SvgIcon;
  }[] = [
    { path: '/accounts', label: 'Accounts', icon: AccountBalanceWalletIcon },
    { path: '/api/login', label: 'Login', icon: ExitToAppIcon },
  ];
  const router = useRouter();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={open}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {links.map((link) => (
            <ListItem
              button
              key={link.label}
              onClick={() => router.push(link.path)}
            >
              <ListItemIcon>
                <link.icon />
              </ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    </Drawer>
  );
};
