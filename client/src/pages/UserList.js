import React, { useEffect } from "react";

//components
import DialogWindow from "../components/DialogWindow";
import UserRow from "../components/UserRow"

// material ui
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../store/User/action';

function UserList() {
    
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(getUsers())
    }, [state.result.deleteSuccess]);

    return (
        <div>
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
                    {
                    state.result.userList.map((user) =>
                        <UserRow user={user} />
                    )
                    }
                </TableBody>
            </TableContainer>
            <DialogWindow/>
        </div>
    )
}

export default UserList;
