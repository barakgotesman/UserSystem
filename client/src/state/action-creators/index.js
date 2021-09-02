export const updateUserList = (newList) =>{
    return (dispatch) =>{
      dispatch({
        type: "update",
        payload: newList
      })  
    }
}

export const deleteUserList = (newList) =>{
    return (dispatch) =>{
      dispatch({
        type: "delete",
        payload: []
      })  
    }
}