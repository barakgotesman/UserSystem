import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { Link, Router } from "@reach/router";

function Menu() {
  return (

    <Paper component={Paper}>

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
