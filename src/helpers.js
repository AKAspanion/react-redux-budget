import _ from 'lodash';


export const clearTimeOuts = () =>{
	let highestTimeoutId = setTimeout(()=> {});
	for (let i = 0 ; i < highestTimeoutId ; i++) {
		clearTimeout(i); 
	}
}

export const createError = (errorFunction, msg) =>{
	setTimeout( () =>{
		errorFunction('');
	}, 10000)
	errorFunction('Error: ' + msg);
}

export const validateAdd = (desc, amount) => {
    return desc !== '' && amount.match(/^[0-9]{1,9}(?:\.[0-9]{1,2})?$/);
}

export const isIdPresent = (arr, id)=>{
    let index =_.findIndex(arr, {id})
    if(index === -1){
        return false
    }
    return true;
}

export const isDescPresent= (arr, desc)=>{
    let index1 =_.findIndex(arr.incomeItems, {desc})
    let index2 =_.findIndex(arr.expenseItems, {desc})
    if(index1 === -1 && index2 === -1){
        return false
    }
    return true;
}


export const IsNumeric = (input) =>{
    return (input - 0) === input && (''+input).trim().length > 0;
}


export const calculatePercentage = (total, num) =>{
	return Math.floor(parseFloat(num)/parseFloat(total) * 100)
}
