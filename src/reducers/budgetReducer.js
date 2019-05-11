import { INITIAL_STATE } from "../actions/types";
import _ from 'lodash';


export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'CHANGE_BUDGET_TYPE':
            return {...state, budgetType: action.payload}
        case 'UPDATE_INCOME':
            return {...state, totalIncome: action.payload}
        case 'UPDATE_EXPENSE':
            return {...state, totalExpense: action.payload}
        case 'DELETE_INCOME':
            let newIncomeItems = state.items.incomeItems;
            _.remove(newIncomeItems, {id: action.payload});
            return {...state, items: {...state.items, incomeItems: newIncomeItems} }
        case 'DELETE_EXPENSE':
            let newExpenseItems = state.items.expenseItems;
            _.remove(newExpenseItems, {id: action.payload});
            return {...state, items: {...state.items, expenseItems: newExpenseItems} }
        case 'ADD_INCOME':
            return {...state, items: {...state.items, incomeItems: [...state.items.incomeItems, action.payload]}};
        case 'ADD_EXPENSE':
            return {...state, items: {...state.items, expenseItems: [...state.items.expenseItems, action.payload]}};
        default:
            return state;
    }
}