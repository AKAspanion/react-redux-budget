export const ADD_INCOME = 'ADD_INCOME';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_INCOME = 'DELETE_INCOME';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const UPDATE_INCOME = 'UPDATE_INCOME';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const CHANGE_BUDGET_TYPE = 'CHANGE_BUDGET_TYPE';
export const CHANGE_FORM_DESC = 'CHANGE_FORM_DESC';
export const CHANGE_FORM_AMOUNT = 'CHANGE_FORM_AMOUNT';

export const INITIAL_FORM_STATE = {
    desc: '', 
    amount: ''
}

export const INITIAL_BUDGET_STATE = {
    budgetType: '+',
    // totalBudget: 100,
    // totalIncome: 50,
    // totalExpense: 40,
    // currDescription: '',
    // currAmount: '',
    items: {
        incomeItems:[
            // {id: '3', desc: 'ey', amount: 5}
        ],
        expenseItems:[
            // {id: '3', desc: 'ey', amount: 5}
        ]
    },
    error: ''
}