import Axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from "react";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';







function UserList({ registerDone, regCallBack }) {
    const [userList, setUserList] = useState([])

    const [username, setUsername] = useState('')
    const [emailForm, setEmail] = useState('')

    const editUser = () => {
        Axios.post("http://localhost:3001/api/update",
          {
            name: username,
            email: emailForm,
          }).then((res) => {
            console.log(res)
            //setregisterDone(true);
          });
      };


    const fetchDataUsers = () => {
        console.log("fetchDataUsers called!")
        Axios.get("http://localhost:3001/api/get").then((res) => {
            setUserList(res.data)

        })
    }

    const deleteUser = (userid) => {
        console.log("delete user calledd!")
        Axios.delete(`http://localhost:3001/api/delete/${userid}`).then((res) => {
            fetchDataUsers()
        })
    }

    useEffect(() => {

        fetchDataUsers()
        regCallBack(false)

    }, [registerDone]);


    return (
        <div>

            <h1> test {registerDone.toString()}</h1>
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
                    {userList.map((user) =>
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.last_connection}</TableCell>
                            <TableCell>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    endIcon={<EditIcon>send</EditIcon>}
                                >
                                    edit
                                </Button>
                            </TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => { deleteUser(user.id) }}>
                                    <HighlightOffIcon color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </TableContainer>
            <Icon className="fa fa-plus-circle" />

        </div>
    )
}

export default UserList;
