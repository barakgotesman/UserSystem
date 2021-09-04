import { SET_DIALOG_CONFIRM, SET_DIALOG_VISABLE } from "./constants"

const initDialog = {
    visable: false,
    confirm: false,
    userid: 0
}

const reducer = (state = initDialog, action) =>{
    switch (action.type){
        case SET_DIALOG_VISABLE:
            return{
                ...state,
                visable: !state.visable,
                userid: action.payload
            };
        case SET_DIALOG_CONFIRM:
            return{
                ...state,
                confirm: !state.confirm
            }
        default:
            return state;
    }
}
export default reducer