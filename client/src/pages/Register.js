import React, { useEffect, useState } from "react";

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from "react-redux";
import { newUser } from '../store/User/action';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const initialRegisterValues={
  name:'',
  email:''
}



function Register() 
{
  const classes = useStyles();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();


  const [ registerForm, setRegisterState] = useState(initialRegisterValues)

  const registerNewUser =()=>{
    dispatch(newUser(registerForm))
  }


  return (
    <form className={classes.form} noValidate autoComplete="off">
      <Grid container spacing={2}>
        {JSON.stringify(registerForm)}
        <Grid item md={12}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => { setRegisterState({...registerForm, name: e.target.value}) }}
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => { setRegisterState({...registerForm, email: e.target.value}) }}
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
