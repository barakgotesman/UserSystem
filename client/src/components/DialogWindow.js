import React from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import * as UIDialogActions from '../store/UI/action';
import { deleteUser } from '../store/User/action';

// material ui
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


function DialogWindow() {
    const DialogSelector = useSelector(state => state.UIdialog);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(UIDialogActions.toggleVisable());
    }

    const handleConfimDelete = () => {
        dispatch(deleteUser(DialogSelector.userid))
        handleClose()
    }

    return (
        <div>
            <Dialog
                open={DialogSelector.visable}
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
                    <Button 
                    onClick={handleConfimDelete} 
                    color="primary" 
                    autoFocus>
                        Yes, delete user
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default DialogWindow