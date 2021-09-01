import './App.css';
import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from "react";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from 'axios';

import Footer from './Footer';
import UserList from './UserList.js';
import Paper from '@material-ui/core/Paper';



function App() {

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

  return (
    <Container maxWidth="lg" component={Paper}>
      <h1>User system ..  </h1>
      <Grid container spacing={2}>
        <Grid item xs>
          sdad

        </Grid>
        <Grid item xs>

          <form className="" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e) => { setUsername(e.target.value) }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <TextField
              id="outlined-basic"
              label="lastConnection"
              variant="outlined"
              onChange={(e) => { setLastConnection(e.target.value) }}
            />



            <Button variant="contained" color="primary" href="#contained-buttons" onClick={registerNewUser}>
              Register user
            </Button>
          </form>

        </Grid>
      </Grid>
      <UserList registerDone={registerDone} regCallBack={setregisterDone}/>
      <Footer />
    </Container>
  );
}

export default App;
