import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import InputBox from './InputBox';
import Button from './Button';
import Selector from './Selector';

import {
    changeFormDescription, 
    changeFormAmount,
    changeBudgetType,
    updateIncome,
    updateExpense,
    addIncome,
    addExpense 
} from '../../actions';
import {
    validateAdd,
    isDescPresent
} from '../../helpers';

class Menu extends React.Component {

    handleChange = (event) =>{
        this.props.changeBudgetType(event.target.value);
    }
    handleButtonClick = () =>{
        const {form, budget} = this.props;
        const {desc, amount} = form;
        if(validateAdd(form.desc, form.amount)){
            let newBudgetItem = {
                id: uuid(),
                desc,
                amount 
            }
            if(!isDescPresent(budget.items, desc)){
                if(budget.budgetType === '+'){
                    this.props.addIncome(newBudgetItem);
                    this.props.updateIncome(parseFloat(amount) + (budget.totalIncome || 0));
                }else{
                    this.props.addExpense(newBudgetItem);
                    this.props.updateExpense(parseFloat(amount) + (budget.totalExpense || 0));
                }        
            }else{
                alert('budget item already added');
            }
        }else{
            alert('fill it');
        }
    }
    handleDescriptionChange = (event) =>{
        this.props.changeFormDescription(event.target.value);
    }
    handleAmountChange = (event) =>{
        this.props.changeFormAmount(event.target.value);
    }
    render() {
        return (
            <div className="menu">
                <Selector
                    name="selector" 
                    budgetType={this.props.budget.budgetType} 
                    handleChange={this.handleChange} 
                />
                <InputBox
                    stateValue={this.props.form.desc}
                    valueType="description"   
                    handleInputChange={this.handleDescriptionChange}                  
                    budgetType={this.props.budget.budgetType} 
                />
                <InputBox 
                    type="number"
                    stateValue={this.props.form.amount}
                    valueType="amount"  
                    handleInputChange={this.handleAmountChange}  
                    budgetType={this.props.budget.budgetType} 
                />
                <Button
                    budgetType={this.props.budget.budgetType}
                    handleButtonClick={this.handleButtonClick}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        form: state.form,
        budget: state.budget
    }
}

export default connect(mapStateToProps, {
    changeFormDescription, 
    changeFormAmount,
    changeBudgetType,
    updateIncome,
    updateExpense,
    addIncome,
    addExpense 
})(Menu);