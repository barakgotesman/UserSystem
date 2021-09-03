import { DELETE_USER, GET_INFO } from "./contants";

const inalize = {
    userList: [],
    deleteSuccess: null
}
const reducer = (state = inalize, action) => {
    console.log("state", state, "action", action)
    switch (action.type) {
        case GET_INFO:
            return { ...state, userList: action.payload };
        case DELETE_USER:
            return { ...state, deleteSuccess: action.payload };
        default:
            return state;

    }
};
export default reducer;