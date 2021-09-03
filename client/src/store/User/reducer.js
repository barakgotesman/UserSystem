import { DELETE_USER, GET_INFO, USER_NOT_FOUND, USER_SELECTED } from "./contants";

const inalize = {
    userList: [],
    deleteSuccess: null,
    editUser: {},
}
const reducer = (state = inalize, action) => {
    switch (action.type) {
        case GET_INFO:
            return { ...state, userList: action.payload };
        case DELETE_USER:
            return { ...state, deleteSuccess: action.payload };
        case USER_SELECTED:
            return {...state, editUser: action.payload }
        case USER_NOT_FOUND:
            return {...state, editUser: action.payload };
        default:
            return state;

    }
};
export default reducer;