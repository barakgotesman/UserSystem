import React, { useEffect, useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Message({ open, setMessageShow, content }) {
    function handleClose() {
        setMessageShow({isOpen:false,content:''})
    }
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {content}
                </Alert>
            </Snackbar>
        </div>
    )

}
export default Message;