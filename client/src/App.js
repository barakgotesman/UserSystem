import React from "react";
import { Switch, Route } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import './App.css';

import Menu from './components/Menu';
import Message from './components/Message';
import Footer from './components/Footer';

import EditUser from './pages/EditUser';
import Home from './pages/Home';
import Register from './pages/Register';
import UserList from './pages/UserList.js';

import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function App() {

  return (

    <Container maxWidth="lg" component={Paper} elevation={3}>
      <Message />

      <Typography variant="h3">
 User system
</Typography>

      <Grid container spacing={3}>
        <Grid item sm={2}>
          <Menu />
        </Grid>
        <Grid item sm={10}>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/edit/:userid" component={EditUser} />
              <Route path="/showusers" component={UserList} />
            </Switch >
          </div>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
