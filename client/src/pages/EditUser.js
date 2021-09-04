import React, { useEffect, useState } from "react";

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUser } from '../store/User/action';

import {
    Link,
    useParams,
    Redirect
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const initialEditValues = {
    id: '',
    name: '',
    email: ''
}

function EditUser() {
    const { userid } = useParams();
    const classes = useStyles();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [editForm, setEditForm] = useState(initialEditValues)
    
    // try to load user with Param USERID
    useEffect(() => {
        dispatch(getUser(userid))
    }, []);

    // if there is user, update form inputs
    useEffect(() => {
        if (state.result.editUser.userfound) {
            setEditForm({
                id: userid,
                name: state.result.editUser.name,
                email: state.result.editUser.email
            })
        }

    }, [state.result.editUser]);

    // send dispatch for form
    const updateUserSubmit = () => {
        dispatch(updateUser(editForm))
    } 

    // if there is not data return to "/showusers" page
    if (state.result.editUser.userfound === false) {
        return <Redirect to="/showusers" />
    }

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
                <Grid item sm={10}>
                    <TextField
                        value={editForm.email}
                        variant="outlined"
                        fullWidth
                        label="Email"
                        onChange={(e) => {
                            setEditForm({ ...editForm, email: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        value={editForm.name}
                        variant="outlined"
                        fullWidth
                        label="Name"
                        onChange={(e) => {
                            setEditForm({ ...editForm, name: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item sm={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={updateUserSubmit}
                    >
                        apply changes
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        component={Link}
                        to="/showusers"
                    >
                        Back
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
export default EditUser;
