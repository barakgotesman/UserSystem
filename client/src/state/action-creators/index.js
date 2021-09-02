export const updateUserList = (newList) =>{
    return (dispatch) =>{
      dispatch({
        type: "update",
        new: newList
      })  
    }
}

export const deleteUserList = (newList) =>{
    return (dispatch) =>{
      dispatch({
        type: "delete",
        new: []
      })  
    }
}