

export default (state = {desc: '', amount: ''}, action) =>{
    switch(action.type){
        case 'CHANGE_FORM_DESC':
            return {...state, desc: action.payload};
        case 'CHANGE_FORM_AMOUNT':
            return {...state, amount: action.payload};
        default:
            return state;
    }
}