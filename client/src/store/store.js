import { combineReducers } from "redux";
import UserReducer from "./User/reducer";
import { createStore , applyMiddleware} from 'redux';
import thunk from "redux-thunk";

const reducers = combineReducers({
    result: UserReducer
});


export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default reducers;
