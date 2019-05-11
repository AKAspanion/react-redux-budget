export const addIncome = (payload) =>{
    return ({
        type: 'ADD_INCOME',
        payload
    })
}

export const addExpense = (payload) =>{
    return ({
        type: 'ADD_EXPENSE',
        payload
    })
}

export const deleteIncome = (payload) =>{
    return ({
        type: 'DELETE_INCOME',
        payload
    })
}
export const deleteExpense = (payload) =>{
    return ({
        type: 'DELETE_EXPENSE',
        payload
    })
}

export const updateError = (payload) =>{
    return ({
        type: 'UPDATE_ERROR',
        payload
    })
}

export const updateIncome = (payload) =>{
    return ({
        type: 'UPDATE_INCOME',
        payload
    })
}

export const updateExpense = (payload) =>{
    return ({
        type: 'UPDATE_EXPENSE',
        payload
    })
}

export const changeBudgetType = (payload) =>{
    return ({
        type: 'CHANGE_BUDGET_TYPE',
        payload
    })
}

export const changeFormDescription = (payload) =>{
    return ({
        type: 'CHANGE_FORM_DESC',
        payload
    })
}

export const changeFormAmount = (payload) =>{
    return ({
        type: 'CHANGE_FORM_AMOUNT',
        payload
    })
}