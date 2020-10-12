import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useAppStyles } from '../../styles/_app';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export interface AppTopBarProps {
  handleDrawerToggle: () => void;
}

export const AppTopBar = ({ handleDrawerToggle }: AppTopBarProps) => {
  const classes = useAppStyles();

  return (
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
  );
};
