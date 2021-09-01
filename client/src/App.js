import './App.css';
import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from "react";
import { Router, Link } from "@reach/router";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from 'axios';

import Footer from './Footer';
import UserList from './UserList.js';
import Paper from '@material-ui/core/Paper';
import EditUser from './EditUser';
import Menu from './Menu';
import Home from './Home';
import Register from './Register';

function App() {
/*
  const hostUrl = "http://localhost:3001/";


  const [username, setUsername] = useState('')
  const [emailForm, setEmail] = useState('')
  const [lastConnectionForm, setLastConnection] = useState('')
  const [registerDone, setregisterDone] = useState(false)


  const registerNewUser = () => {
    Axios.post(hostUrl + "api/register",
      {
        name: username,
        email: emailForm,
        lastConnection: lastConnectionForm
      }).then((res) => {
        //alert("test")
        console.log(res)
        setregisterDone(true);
      });
  };

                <UserList path="/showusers" registerDone={registerDone} regCallBack={setregisterDone}/>

*/
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
