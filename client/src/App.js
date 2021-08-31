import './App.css';
import * as React from 'react';
import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';



function App() {
  return (
    <Container maxWidth="md">
      <h1>User system .. </h1>
      <Grid container spacing={2}>
        <Grid item xs="4" md>
          sdad
         
        </Grid>
        <Grid item xs="8">

        <form className="" noValidate autoComplete="off">
  <TextField id="outlined-basic" label="username" variant="outlined" />
  <TextField id="outlined-basic" label="location" variant="outlined" />
      <Button variant="contained" color="primary" href="#contained-buttons">
      Register user
    </Button>
</form>

        </Grid>
      </Grid>
      <Button variant="contained" size="small">Contained</Button>
    </Container>
  );
}

export default App;
