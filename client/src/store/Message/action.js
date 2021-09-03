import { SET_MESSAGE, HIDE_MESSAGE } from "./contants";

let timeOutSec = null;

export const HideMessage = () => (dispatch) => {
    dispatch({ type: HIDE_MESSAGE })
    clearTimeout(timeOutSec)
}


export const setMessage = (content, kind, time = 6000) => (dispatch) => {
    dispatch({
        type: SET_MESSAGE,
        payload: { content, kind, time }
    });

    timeOutSec = setTimeout(() => {
        dispatch({ type: HIDE_MESSAGE });
    }, time);
}