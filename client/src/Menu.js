import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { Link, Router } from "@reach/router";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 'unset',
  },
}));

function Menu() {
  const classes = useStyles();

  return (

    <Paper component={Paper} className={classes.root}>

      <MenuList>
        <MenuItem component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem component={Link} to="/showusers">
          Users
        </MenuItem>
        <MenuItem component={Link} to="/register">Register</MenuItem>
      </MenuList>

    </Paper>

  )
}

export default Menu;
