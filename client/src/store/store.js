import { combineReducers } from "redux";
import UserReducer from "./User/reducer";
import MessageReducer from "./Message/reducer";

import { createStore , applyMiddleware} from 'redux';
import thunk from "redux-thunk";

const reducers = combineReducers({
    result: UserReducer,
    message: MessageReducer
});


export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default reducers;
