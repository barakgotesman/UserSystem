import { combineReducers } from "redux";
import UsersListReducer from "./UsersListReducer";

const reducers = combineReducers({
        userList: UsersListReducer
});

export default reducers;