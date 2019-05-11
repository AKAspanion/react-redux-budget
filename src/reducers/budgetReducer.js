import { 
    INITIAL_BUDGET_STATE, 
    CHANGE_BUDGET_TYPE, 
    UPDATE_INCOME, 
    UPDATE_EXPENSE,
    UPDATE_ERROR,
    DELETE_INCOME,
    DELETE_EXPENSE,
    ADD_EXPENSE,
    ADD_INCOME
} from "../actions/types";
import _ from 'lodash';


export default (state = INITIAL_BUDGET_STATE, action) =>{
    switch(action.type){
        case CHANGE_BUDGET_TYPE:
            return {...state, budgetType: action.payload}
        case UPDATE_INCOME:
            return {...state, totalIncome: action.payload}
        case UPDATE_EXPENSE:
            return {...state, totalExpense: action.payload}
        case UPDATE_ERROR:
            return {...state, error: action.payload}
        case DELETE_INCOME:
            let newIncomeItems = state.items.incomeItems;
            _.remove(newIncomeItems, {id: action.payload});
            return {...state, items: {...state.items, incomeItems: newIncomeItems} }
        case DELETE_EXPENSE:
            let newExpenseItems = state.items.expenseItems;
            _.remove(newExpenseItems, {id: action.payload});
            return {...state, items: {...state.items, expenseItems: newExpenseItems} }
        case ADD_INCOME:
            return {...state, items: {...state.items, incomeItems: [...state.items.incomeItems, action.payload]}};
        case ADD_EXPENSE:
            return {...state, items: {...state.items, expenseItems: [...state.items.expenseItems, action.payload]}};
        default:
            return state;
    }
}