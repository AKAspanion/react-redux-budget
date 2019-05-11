import React from 'react';

class InputBox extends React.Component {

    plusStyles = {outlineColor: '#5C965D'}
    minusStyles = {outlineColor: '#D4383E'}

    renderInputBox = (budgetType) =>{
        return (
            <div className='input-box' >
                <input
                    type={this.props.type}
                    value={this.props.stateValue}
                    onChange={this.props.handleInputChange}
                    placeholder={this.props.valueType}
                    className={this.props.valueType}
                    style={budgetType === '+' ? this.plusStyles:this.minusStyles}
                />
            </div>
        )
    }

    render() {
        return this.renderInputBox(this.props.budgetType);
    }
}

export default InputBox;