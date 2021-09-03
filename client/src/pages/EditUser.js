import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "@reach/router";

import { useSelector, useDispatch } from "react-redux";
import { updateUser,getUser } from '../store/User/action';
import * as MessageActions from '../store/Message/action';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


  const initialEditValues={
    name:'',
    email:''
  }

function EditUser({ userid }) {
    const classes = useStyles();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [editForm, setEditForm] = useState(initialEditValues)

    const [usernameForm, setUsername] = useState('')
    const [emailForm, setEmail] = useState('')

    if(Object.keys(state.result.editUser)==0)
    {
        Redirect()
    }

    useEffect(() => {

        dispatch(getUser(userid))
        
    }, []);

    const updateUser = (userid) => {
        Axios.put("http://localhost:3001/api/users", {
            userid: userid,
            email: emailForm,
            username: usernameForm
        }).then((res) => {
            console.log("editUser function", res)
        })
    };

    return (

        <form className="form">
            <Typography component="h1" variant="h5" >
                Edit user {userid}
            </Typography>

            <Grid container spacing={2}>
                <Grid item sm={2}>
                    <TextField
                        value={userid}
                        variant="outlined"
                        fullWidth
                        label="User id"
                        readOnly
                        disabled

                    />
                </Grid>
                {JSON.stringify(state.result.editUser)}
                <Grid item sm={10}>
                    <TextField
                        value={editForm.name}
                        variant="outlined"
                        fullWidth
                        label="Email"
                        onChange={(e) => {
                            setEditForm({...editForm, email: e.target.value})
                        }}
                    />
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        value={editForm.username}
                        variant="outlined"
                        fullWidth
                        label="Username"
                        onChange={(e) => {
                            setEditForm({...editForm, name: e.target.value})
                        }}

                    />
                </Grid>
                <Grid item sm={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={() => { updateUser(userid) }}
                    >
                        apply changes
                    </Button>
                    <Button 
                    variant="outlined" 
                    color="secondary" 
                    className={classes.button}
                    component={Link}
                    to= "/showusers"
                    >
                        Back
                    </Button>
                </Grid>
            </Grid>

        </form>
    )
}
export default EditUser;
