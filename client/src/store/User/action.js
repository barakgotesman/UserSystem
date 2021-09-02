import { GET_INFO } from "./contants";
import Axios from "axios";

export const getUsers = async()  => {
    try {
        const res = await Axios.get("http://localhost:3001/api/users")
        if (res.status >= 200 && res.status < 300) {
            console.log("test",res.data)

            return (dispatch) => {
                dispatch({
                    type: GET_INFO,
                    payload: res.data
                })
            }
        }
        else {
            return (dispatch) => {
                dispatch({
                    type: GET_INFO,
                    payload: "error server " + res.status
                })
            }
        }

    }
    catch (err) {

    }



}

export const deleteUserList = (newList) => {
    return (dispatch) => {
        dispatch({
            type: "delete",
            payload: []
        })
    }
}