import { combineReducers } from "redux";
import getUsers from "./User/reducer";
import { createStore , applyMiddleware} from 'redux';
import thunk from "redux-thunk";

const reducers = combineReducers({
    userList: getUsers
});


export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default reducers;
