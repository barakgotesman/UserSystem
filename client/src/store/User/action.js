import { DELETE_USER, GET_INFO } from "./contants";
import Axios from "axios";

export const getUsers = () => (dispatch, getState) => {
    console.log("getState",getState,"dispatch",dispatch)
    Axios.get("http://localhost:3001/api/users").then((res) => {
        if (res.status >= 200 && res.status < 300) {

            dispatch({
                type: GET_INFO,
                payload: res.data
            })

        }
        else {
            dispatch({
                type: GET_INFO,
                payload: "error server " + res.status
            })


        }
    }).catch((e)=>{
        dispatch({
            type: GET_INFO,
            payload: "error while sending the req "+e
        })
    })
}


export const deleteUser = (userid) => (dispatch, getState) => {
    console.log("userid:",userid)
    Axios.delete(`http://localhost:3001/api/users/${userid}`).then((res) => {
        if (res.status >= 200 && res.status < 300) {

            dispatch({
                type: DELETE_USER,
                payload: res.data
            })

        }
        else {
            dispatch({
                type: DELETE_USER,
                payload: "error server " + res.status
            })


        }
    }).catch((e)=>{
        dispatch({
            type: DELETE_USER,
            payload: "error while sending the req "+e
        })
    })
}



