import './App.css';
import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from "react";
import { Router, Link } from "@reach/router";
import Footer from './Footer';
import UserList from './UserList.js';
import Paper from '@material-ui/core/Paper';
import EditUser from './EditUser';
import Menu from './Menu';
import Home from './Home';
import Register from './Register';

function App() {

  return (
   
    <Container maxWidth="lg" component={Paper} elevation={3}>
      <h1>User system ..  </h1>
      <Grid container spacing={3}>
        <Grid item sm={2}>
          <Menu/>

        </Grid>
        <Grid item sm={10}>
        <div>
          <Router>
              <Home path="/"></Home>
              <Register path="/register" />
              <UserList path="/showusers"/>
              <EditUser path="edit/:userid" />
          </Router>
        </div>


        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
