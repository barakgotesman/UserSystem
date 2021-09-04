import { combineReducers } from "redux";
// reducers
import UserReducer from "./User/reducer";
import UIdialogReducer from './UI/reducer'
import MessageReducer from "./Message/reducer";

import { createStore , applyMiddleware} from 'redux';
import thunk from "redux-thunk";

const reducers = combineReducers({
    result: UserReducer,
    message: MessageReducer,
    UIdialog: UIdialogReducer
});


export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default reducers;
