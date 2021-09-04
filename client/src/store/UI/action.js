import { SET_DIALOG_CONFIRM, SET_DIALOG_VISABLE } from "./constants"

// change the visable of my dialog
export const toggleVisable = (userid) => (dispatch,getState) => {
    dispatch({ 
        type: SET_DIALOG_VISABLE ,
        payload: userid
    })
    console.log("toggleVisable action called!",getState())
}

//change confirm of dialog
export const toggleConfirm = () => (dispatch) =>{
    dispatch({type: SET_DIALOG_CONFIRM})
}