import { SET_MESSAGE, HIDE_MESSAGE} from "./contants";

let timeOutSec = null;

export const HideMessage = () => (dispatch) =>{
    dispatch({type: HIDE_MESSAGE})
    clearTimeout(timeOutSec)
}

export const setMessage = ()