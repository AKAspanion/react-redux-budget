import _ from 'lodash';

export const validateAdd = (desc, amount) => {
    return desc !== '' && amount !== '';
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
    return (input - 0) == input && (''+input).trim().length > 0;
}


export const calculatePercentage = (total, num) =>{
	return Math.floor(parseFloat(num)/parseFloat(total) * 100)
}

export const commaFormatted = (amount) => {
	var delimiter = ","; 
	var a = amount.split('.',2)
	var d = a[1];
	var i = parseInt(a[0]);
	if(isNaN(i)) { return ''; }
	var minus = '';
	if(i < 0) { 
        minus = '-'; 
    }
	i = Math.abs(i);
	var n = new String(i);
	var a = [];
	while(n.length > 3) {
		var nn = n.substr(n.length-3);
		a.unshift(nn);
		n = n.substr(0,n.length-3);
	}
	if(n.length > 0) { a.unshift(n); }
	n = a.join(delimiter);
	if(d.length < 1) { amount = n; }
	else { amount = n + '.' + d; }
	amount = minus + amount;
	return amount;
}