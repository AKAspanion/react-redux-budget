import React from 'react';
import {connect} from 'react-redux';

import {
    deleteIncome,
    deleteExpense,
    updateIncome,
    updateExpense,
    updateError
} from '../../actions';
import { calculatePercentage, createError,addCommas } from '../../helpers';

class Item extends React.Component {

    style = {
        plusMoneyStyle: {
            color: '#5C965D'
        },
        minusMoneyStyle: {
            color: '#D4383E'
        },
        plusDeleteStyle: {
            color: '#5C965D',
            border: '1px solid #5C965D'
        },
        minusDeleteStyle: {
            color: '#D4383E',
            border: '1px solid #D4383E'
        },
        plusPercentStyle: {
            color: 'white',
            background: '#5C965D'
        },
        minusPercentStyle: {
            color: 'white',
            background: '#D4383E'
        }

    } 

    handleDelete = () =>{
        const {id,budgetType,amount,totalIncome,
            totalExpense, updateIncome, updateExpense,
            deleteIncome,deleteExpense,updateError} = this.props;
        if(budgetType === '+'){
            if(totalIncome-parseFloat(amount)-totalExpense < 0 ){
                createError(updateError,'Deleting this will make budget negative!');
            }else{
                updateIncome(totalIncome - parseFloat(amount))
                deleteIncome(id);
            }
        }else{
            updateExpense(totalExpense - parseFloat(amount))
            deleteExpense(id);
        }
    }

    render() {
        const {id,budgetType,amount,description} = this.props;
        return (
            <div className="item" key={id}>
                <div className="item-description">
                    {description}
                </div>
                <div className="item-amount">
                    <div className="money" 
                        style={budgetType === '+' ? this.style.plusMoneyStyle:this.style.minusMoneyStyle}
                        >{budgetType}{addCommas(amount)}</div>
                    <div className="percentage"
                        style={budgetType === '+' ? this.style.plusPercentStyle:this.style.minusPercentStyle}
                        >{calculatePercentage(this.props.totalIncome, amount)}%</div>
                    <div
                        className="delete"
                        style={budgetType === '+' ? this.style.plusDeleteStyle:this.style.minusDeleteStyle}
                        onClick={this.handleDelete}
                        >&#10006;</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        totalIncome: state.budget.totalIncome,
        totalExpense: state.budget.totalExpense
    }
}

export default connect(mapStateToProps, {
    deleteIncome,
    deleteExpense,
    updateIncome,
    updateExpense,
    updateError
})(Item);