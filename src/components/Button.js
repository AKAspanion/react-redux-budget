import React from 'react';

class Button extends React.Component {
    
    plusStyles = {border: '1px solid #5C965D', color: '#5C965D'}
    minusStyles = {border: '1px solid #D4383E', color: '#D4383E' }
    render() {
        const {budgetType} = this.props;
        return (
            <div className="button"
                style={budgetType === '+' ? this.plusStyles:this.minusStyles}>
                <span onClick={this.props.handleButtonClick}>&#10003;</span>
            </div>
        );
    }
}

export default Button;