import React from 'react';
import { calculatePercentage } from '../../helpers';

class Tile extends React.Component {
    
    plusStyles = {background: '#5C965D'}
    minusStyles = {background: '#D4383E'}

    renderPercentage = (budgetType) =>{
        const {amount, total} = this.props;
        return budgetType === '-' ? 
            <div className="percentage">{calculatePercentage(total, amount) || 0}%</div> : 
            <div className="percentage">100%</div>
    }

    render() {
        const {title, amount, budgetType} = this.props;
        return (
            <div className="tile" style={budgetType === '+' ? this.plusStyles:this.minusStyles}>
                <div className="tile-title">
                    {title}
                </div>
                <div className="tile-amount">
                    <div className="money" style={{color: '#fff'}}>
                        {budgetType} {amount || 0}                        
                    </div>
                    {this.renderPercentage(budgetType)} 
                </div>
            </div>
        );
    }
}

export default Tile;