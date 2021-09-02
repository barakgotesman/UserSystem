import React, { useEffect, useState } from "react";
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));





function Register() {
  const classes = useStyles();


  const hostUrl = "http://localhost:3001/";

  const [username, setUsername] = useState('')
  const [emailForm, setEmail] = useState('')

  const registerNewUser = () => {
    Axios.post(hostUrl + "api/register",
      {
        name: username,
        email: emailForm
      }).then((res) => {
        if(res.status>=200 && res.status<300)
          console.log("register done")
        else
          console.log("The server reported an error: status",res.status)
      });
  };

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item md={12}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => { setUsername(e.target.value) }}
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </Grid>
      </Grid>


      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={registerNewUser}
        className={classes.submit}
      >
        Register user
      </Button>

    </form >


  )
}

export default Register;
