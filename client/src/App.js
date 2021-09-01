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

import Footer from './footer';

function App() {

  const hostUrl = "http://localhost:3001/";


  const [username, setUsername] = useState('')
  const [lastName, setLastName] = useState('')
  const [genderSelect, setGender] = useState('')
  const [loc, setLocation] = useState('')

  const registerNewUser = () => {
    Axios.post(hostUrl + "api/register",
      {
        name: username,
        last_name: lastName,
        gender: genderSelect,
        location: loc
      }).then(() => {
        alert("test")
      });
  };

  return (
    <Container maxWidth="lg">
      <h1>User system .. </h1>
      <Grid container spacing={2}>
        <Grid item xs="4">
          sdad

        </Grid>
        <Grid item xs="8">

          <form className="" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              onChange={(e) => { setUsername(e.target.value) }}
            />
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              onChange={(e) => { setLastName(e.target.value) }}
            />
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              onChange={(e) => { setGender(e.target.value) }}
            />

            <FormControl>
              <InputLabel
                id="demo-simple-select-label"
              >
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => { setLocation(e.target.value) }}
              >
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
              </Select>
            </FormControl>


            <Button variant="contained" color="primary" href="#contained-buttons" onClick={registerNewUser}>
              Register user
            </Button>
          </form>

        </Grid>
      </Grid>
      <Button variant="contained" size="small">Contained</Button>
      <Footer />
    </Container>
  );
}

export default App;
