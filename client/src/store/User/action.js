import { DELETE_USER,
     GET_INFO,
      USER_NOT_FOUND,
       USER_SELECTED,
       USER_UPDATED } from "./contants";
import * as MessageActions from '../Message/action';
import Axios from "axios";
import { WEB_URL } from '../../utils';

export const getUsers = () => (dispatch, getState) => {
    Axios.get(WEB_URL + "/users").then((res) => {
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
    Axios.get(WEB_URL + `/users/${userid}`).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            if (res.data.length) {
                dispatch({
                    type: USER_SELECTED,
                    payload: { ...res.data[0], userfound: true }
                });
            }
            else {
                dispatch(MessageActions.setMessage(
                    'User with ID:' + userid + " not found.", 'error')
                );
                dispatch(
                    {
                        type: USER_NOT_FOUND,
                        payload: { userfound: false }
                    }
                );

            }
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

export const updateUser = (user) => (dispatch, getSate) => {
    Axios.put(WEB_URL + '/users', {
        userid: user.id,
        email:  user.email,
        username: user.name
    }).then((res)=>{
        if (res.status >= 200 && res.status < 300) {
            dispatch(MessageActions.setMessage(
                'User Updated!', 'success')
            );
            console.log("data test",res.data)
            dispatch({
                type: USER_UPDATED,
                payload: res.data
            });
            
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


export const newUser = (user) => (dispatch, getState) => {
    Axios.post(WEB_URL + "/register",
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

    Axios.delete(WEB_URL + `/users/${userid}`).then((res) => {
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



