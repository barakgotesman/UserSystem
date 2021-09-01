import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React,{ useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import { useRadioGroup } from '@material-ui/core';

function EditUser({user}) {

    const [usernameForm, setUsername] = useState(user.username)
    const [emailForm, setEmail] = useState(user.email)

    const updateUser = (user) =>
    {
        console.log("updateUser function js called")
        Axios.put("https://localhost:3001/api/update",{
            userid: user.id,
            email: emailForm,
            username: usernameForm
        }).then((res)=>{
            console.log("editUser function",res)
        })
    };

    return (
        
        <form className="form">
            <Typography component="h1" variant="h5" >
                Edit user
            </Typography>

            <Grid container spacing={2}>
                <Grid item sm={2}>
                    <TextField
                    value= {user.id}
                    variant="outlined"
                    fullWidth
                    label="User id"
                    readOnly
                    disabled

                />
                </Grid>
                <Grid item sm={10}>
                    <TextField
                    value = {emailForm}
                    variant="outlined"
                    fullWidth
                    label="Email"
                    onChange ={(e)=>{
                        setEmail(e.target.value)
                    }}
                />
                </Grid>
                <Grid item sm={12}>
                    <TextField
                    value = {usernameForm}
                    variant="outlined"
                    fullWidth
                    label="Username"
                    onChange ={(e)=>{
                        setUsername(e.target.value)
                    }}
                    
                />
                </Grid>
                <Grid item sm={12}>
                    <Button 
                    variant="contained" 
                    color="primary"
                    size="medium"
                    onClick={()=>{updateUser(user)}}
                    >
                    apply changes
                    </Button>
                </Grid>
            </Grid>
          
        </form>
    )
}
export default EditUser;
