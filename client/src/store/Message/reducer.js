import { SET_MESSAGE, HIDE_MESSAGE } from "./contants";

const initMessage = {
    kind: "success",
    content: '',
    time: 6000,
    isOpen: false
}

const reducer = (state = initMessage, action) =>
{
    switch (action.type)
    {
    case HIDE_MESSAGE:
        return {
            ...state,
             isOpen: false
            }
    case SET_MESSAGE:
        return {
            ...state,
            isOpen: ture
        }
    }

}
export default reducer;