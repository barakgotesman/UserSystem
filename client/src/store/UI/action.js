import { SET_DIALOG_CONFIRM, SET_DIALOG_VISABLE } from "./constants"

// change the visable of my dialog
export const toggleVisable = () => (dispatch) => {
    dispatch({ type: SET_DIALOG_VISABLE })
}

//change confirm of dialog
export const toggleConfirm = () => (dispatch) =>{
    dispatch({type: SET_DIALOG_CONFIRM})
}