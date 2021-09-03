import React, { useEffect, useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useSelector, useDispatch } from "react-redux";
import {  HideMessage, setMessage } from '../store/Message/action';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Message() {
    const dispatch = useDispatch();
    const messageState = useSelector(state => state);
    console.log("messageState:", messageState)

    function handleClose(e, reason) {
        if (reason === 'clickaway')
            return

        dispatch(
            HideMessage()
        )
    }

    return (
        <div>
            <Snackbar
                open={messageState.message.isOpen}
                autoHideDuration={messageState.message.time}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={messageState.message.kind}>
                    {messageState.message.content}
                </Alert>
            </Snackbar>
        </div>
    )

}
export default Message;