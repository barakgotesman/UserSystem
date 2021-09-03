import './App.css';
import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from "react";
import { Router, Link } from "@reach/router";
import Footer from './components/Footer';
import UserList from './pages/UserList.js';
import Paper from '@material-ui/core/Paper';
import EditUser from './pages/EditUser';
import Menu from './components/Menu';
import Home from './pages/Home';
import Register from './pages/Register';
import Message from './components/Message';

import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUserList } from './store/User/action';

function App() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("state", state.userList)

  const f = () => {
    console.log("test")

    dispatch(getUsers())
  }
  return (

    <Container maxWidth="lg" component={Paper} elevation={3}>
      <Message/>
      <h1>User system ..   </h1>

      <button onClick={f}>test</button>

      <Grid container spacing={3}>
        <Grid item sm={2}>
          <Menu />

        </Grid>
        <Grid item sm={10}>
          <div>
            <Router>
              <Home path="/"></Home>
              <Register path="/register" />
              <UserList path="/showusers" />
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
