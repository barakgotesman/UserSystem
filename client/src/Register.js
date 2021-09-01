import React, { useEffect, useState } from "react";
import Axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function Register() {
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

    )
}
export default Register;
