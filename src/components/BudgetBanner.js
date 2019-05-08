import React from 'react';

import Tile from "./Tile";
import NetBudget from "./NetBudget";

class BudgetBanner extends React.Component {
    
    plusStyles = {outlineColor: '#5C965D'}
    minusStyles = {outlineColor: '#D4383E'}
    render() {
        return (
            <div className="budget-banner">
                <NetBudget
                    totalBudget={this.props.totalBudget}
                />
                <div className="tile-container">
                    <Tile 
                        title="INCOME"
                        budgetType='+'                        
                        amount={this.props.totalIncome}/>
                    <Tile
                        title="EXPENSES"
                        budgetType='-'
                        amount={this.props.totalExpense}
                        />
                </div>
            </div>
        );
    }
}

export default BudgetBanner;