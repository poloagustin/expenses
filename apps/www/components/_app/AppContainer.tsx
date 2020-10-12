import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../shared/theme';
import { useAppStyles } from '../../styles/_app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppTopBar } from './AppTopBar';
import { AppDrawer } from './AppDrawer';

export const AppContainer = ({ children }: PropsWithChildren<{}>) => {
  const classes = useAppStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen((value) => !value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppTopBar handleDrawerToggle={handleDrawerToggle} />
        <AppDrawer open={open} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};
