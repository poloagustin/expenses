import React from 'react';
import clsx from 'clsx';
import type { AppProps } from 'next/app';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../shared/theme';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

const App = ({ Component, pageProps }: AppProps) => {
  const classes = useStyles();
  const apolloClient = new ApolloClient({
    uri: process.env.NX_BACKEND_URI,
    fetch: fetch as never,
  });
  const links: {
    path: string;
    label: string;
    icon: typeof SvgIcon;
  }[] = [{ path: '/api/login', label: 'Login', icon: ExitToAppIcon }];
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen((value) => !value);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Expenses</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <div className={classes.root}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  edge="start"
                  className={clsx(classes.menuButton)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  Permanent drawer
                </Typography>
              </Toolbar>
            </AppBar>
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
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Component {...pageProps} />
            </main>
          </div>
        </ApolloProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
