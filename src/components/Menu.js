import React from 'react';
import InputBox from './InputBox';
import Button from './Button';
import Selector from './Selector';

class Menu extends React.Component {

    handleChange = (event) =>{
        this.props.getBudgetType(event.target.value);
    }
    handleButtonClick = () =>{
        this.props.addClick();
    }
    handleDescriptionChange = (event) =>{
        this.props.changeDescription(event);
    }
    handleAmountChange = (event) =>{
        this.props.changeAmount(event);
    }
    render() {
        return (
            <div className="menu">
                <Selector
                    name="selector" 
                    budgetType={this.props.budgetType} 
                    handleChange={this.handleChange} 
                />
                <InputBox
                    stateValue={this.props.description}
                    type="description"   
                    handleInputChange={this.handleDescriptionChange}                  
                    budgetType={this.props.budgetType} 
                />
                <InputBox 
                    stateValue={this.props.amount}
                    type="amount"  
                    handleInputChange={this.handleAmountChange}  
                    budgetType={this.props.budgetType} 
                />
                <Button
                    budgetType={this.props.budgetType}
                    handleButtonClick={this.handleButtonClick}
                />
            </div>
        );
    }
}

export default Menu;