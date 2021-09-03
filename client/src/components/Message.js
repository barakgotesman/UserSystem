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
            messageState.HideMessage()
        )
    }

    return (
        <div>
            <Snackbar
                open={messageState.isOpen}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={messageState.kind}>
                    {messageState.content}
                </Alert>
            </Snackbar>
        </div>
    )

}
export default Message;