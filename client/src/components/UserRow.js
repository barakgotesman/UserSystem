import React from 'react';

// material ui
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import { useSelector, useDispatch } from "react-redux";
import * as UIDialogActions from '../store/UI/action';

import { Link } from "react-router-dom";

function UserRow(props)
{
    const user = props.user;
    const dispatch = useDispatch();

    const deleteUserWithID = (userid)=>{
        dispatch(UIDialogActions.toggleVisable(userid));
    }

    return(
        <>
        <TableRow key={user.id}>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.last_connection}</TableCell>
        <TableCell>
            <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                to={`/edit/${user.id}`}
                endIcon={<EditIcon></EditIcon>}
            >
                edit
            </Button>
        </TableCell>
        <TableCell>
            <IconButton
                aria-label="delete"
                onClick={() => { deleteUserWithID(user.id) }}>
                <HighlightOffIcon color="error" />
            </IconButton>
        </TableCell>
    </TableRow>
    </>

    )
}

export default UserRow;