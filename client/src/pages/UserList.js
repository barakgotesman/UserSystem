import Axios from "axios";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { Link, Router } from "@reach/router";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Messase from "../components/Message"

import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from '../store/User/action';
import * as MessageActions from '../store/Message/action';


function UserList() {
    const [userList, setUserList] = useState([])
    const [messageState, setMessageState] = useState({ isOpen: false, content: '' })
    const [userid, setUserId] = useState(0)
    const state = useSelector((state) => state);
    console.log("test", state)
    const dispatch = useDispatch();

    // for dialog "are you sure?"
    const [open, setOpen] = useState(false);
    const handleClickOpen = (uid) => {
        setUserId(uid)
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
        setUserId(0);
    };

    const fetchDataUsers =
        () => {
            console.log("fetchDataUsers called!")
            Axios.get("http://localhost:3001/api/users").then((res) => {
                setUserList(res.data)

            })
        }

    const handleConfimDelete = () => {
        console.log("delete user calledd!", userid)
        dispatch(deleteUser(userid))
        handleClose()
    }

    useEffect(() => {
        dispatch(getUsers())
        if (state.result.deleteSuccess) {
            // setMessageState({ isOpen: true, content: 'delete done' })
           
        }
    }, [state.result.deleteSuccess]);

    return (
        <div>
            <button onClick={()=>{ dispatch(MessageActions.setMessage(
                'test','success',6000)
            );}}>Test</button>
            <button onClick={()=>{ dispatch(MessageActions.setMessage(
                'test222','error',1000)
            );}}>Test</button>

            <TableContainer >
                <TableHead>
                    <TableRow>
                        <TableCell>User id</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Last Connection</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.result.userList.map((user) =>
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
                                    onClick={() => { handleClickOpen(user.id) }}>
                                    <HighlightOffIcon color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </TableContainer>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Hi there, pay attention
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action cannot be undone,
                        are you sure you want to delete this user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfimDelete} color="primary" autoFocus>
                        Yes, delete user
                    </Button>
                </DialogActions>
            </Dialog>
            <Messase
                open={messageState.isOpen}
                content={messageState.content}
                setMessageShow={setMessageState}
            />
        </div>
    )
}

export default UserList;
