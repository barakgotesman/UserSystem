import { DELETE_USER, GET_INFO } from "./contants";
import * as MessageActions from '../Message/action';
import Axios from "axios";

export const getUsers = () => (dispatch, getState) => {
    console.log("getState", getState, "dispatch", dispatch)
    Axios.get("http://localhost:3001/api/users").then((res) => {
        if (res.status >= 200 && res.status < 300) {

            dispatch({
                type: GET_INFO,
                payload: res.data
            })
        }
        else {
            dispatch(MessageActions.setMessage(
                'server error: ' + res.status, 'success')
            );
        }
    }).catch((e) => {
        dispatch(MessageActions.setMessage(
            'error: ' + e, 'error')
        );
    })
}

export const getUser = (userid) => (dispatch, getSate) => {
    Axios.get(`http://localhost:3001/api/users/${userid}`).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            if (res.date[0]) {
                //user found
            }
            else {
                dispatch(MessageActions.setMessage(
                    'server error - ' + res.status, 'error')
                );
            }
        }

    }
}

export const updateUser = (user) => (dispatch, getSate) => {

}


export const newUser = (user) => (dispatch, getState) => {
    Axios.post("http://localhost:3001/api/register",
        {
            name: user.name,
            email: user.email
        }).then((res) => {
            if (res.status >= 200 && res.status < 300) {
                dispatch(MessageActions.setMessage(
                    'User register done!', 'success')
                );
            }
            else {
                dispatch(MessageActions.setMessage(
                    'server error - ' + res.status, 'error')
                );
            }

        }).catch((e) => {
            dispatch(MessageActions.setMessage(
                'error ' + e, 'error')
            );

        })


}


export const deleteUser = (userid) => (dispatch, getState) => {

    Axios.delete(`http://localhost:3001/api/users/${userid}`).then((res) => {
        if (res.status >= 200 && res.status < 300) {

            dispatch({
                type: DELETE_USER,
                payload: res.data
            })
            dispatch(MessageActions.setMessage(
                'User deleted', 'success')
            );

        }
        else {
            dispatch(MessageActions.setMessage(
                'server error - ' + res.status, 'error', 2000)
            );


        }
    }).catch((e) => {

        dispatch(MessageActions.setMessage(
            'error ' + e, 'error')
        );

    })
}



