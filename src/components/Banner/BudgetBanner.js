import React from 'react';
import { connect } from 'react-redux';

import Tile from "./Tile";
import NetBudget from "./NetBudget";

class BudgetBanner extends React.Component {
    
    plusStyles = {outlineColor: '#5C965D'}
    minusStyles = {outlineColor: '#D4383E'}
    render() {
        const {budget} = this.props;
        return (
            <div className="budget-banner">
                <NetBudget
                    totalBudget={(budget.totalIncome - budget.totalExpense) || 0}
                />
                <div className="tile-container">
                    <Tile 
                        total={budget.totalIncome}
                        title="INCOME"
                        budgetType='+'                        
                        amount={budget.totalIncome}/>
                    <Tile
                        total={budget.totalIncome}
                        title="EXPENSES"
                        budgetType='-'
                        amount={budget.totalExpense}
                        />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        budget: state.budget
    }
}

export default connect(mapStateToProps, {})(BudgetBanner);