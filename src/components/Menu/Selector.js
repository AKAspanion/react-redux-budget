import React from 'react';

class Selector extends React.Component {

    plusStyles = {border: '1px solid #5C965D'}
    minusStyles = {border: '1px solid #D4383E'}

    render() {
        const {name, budgetType, handleChange} = this.props;
        return (
            <div className="selector">
                <select style={budgetType === '+' ? this.plusStyles:this.minusStyles}
                    name={name} value={budgetType} onChange={handleChange}>
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                </select>
            </div>
        );
    }
}

export default Selector;