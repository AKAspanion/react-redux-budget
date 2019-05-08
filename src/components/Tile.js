import React from 'react';

class Tile extends React.Component {
    
    plusStyles = {background: '#5C965D'}
    minusStyles = {background: '#D4383E'}

    renderPercentage = (budgetType) =>{
        return budgetType === '-' ? 
            <span className="percentage">90%</span> : 
            <span className="percentage" style={{color: '#ccc'}}>___</span>
    }

    render() {
        const {title, amount, budgetType} = this.props;
        return (
            <div className="tile" style={budgetType === '+' ? this.plusStyles:this.minusStyles}>
                <div className="tile-title">
                    {title}
                </div>
                <div className="tile-amount">
                    {budgetType} {amount || 0}
                    {this.renderPercentage(budgetType)}
                </div>
            </div>
        );
    }
}

export default Tile;