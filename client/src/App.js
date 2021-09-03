import './App.css';
import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUserList } from './store/User/action';

import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Menu from './components/Menu';
import Message from './components/Message';
import Footer from './components/Footer';

import EditUser from './pages/EditUser';
import Home from './pages/Home';
import Register from './pages/Register';
import UserList from './pages/UserList.js';



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
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              
              <Register path="/register" />
              <UserList path="/showusers" />
              <EditUser path="edit/:userid" />
            </Switch>
          </div>


        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
