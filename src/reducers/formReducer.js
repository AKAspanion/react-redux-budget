import { 
    CHANGE_FORM_DESC, 
    CHANGE_FORM_AMOUNT, 
    INITIAL_FORM_STATE 
} from "../actions/types";


export default (state = INITIAL_FORM_STATE, action) =>{
    switch(action.type){
        case CHANGE_FORM_DESC:
            return {...state, desc: action.payload};
        case CHANGE_FORM_AMOUNT:
            return {...state, amount: action.payload};
        default:
            return state;
    }
}