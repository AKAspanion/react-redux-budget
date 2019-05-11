import { combineReducers } from 'redux';

import formReducer from './formReducer'
import budgetReducer from './budgetReducer'

export default combineReducers({
    form: formReducer,
    budget: budgetReducer
})