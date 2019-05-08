import React from 'react';

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

    render() {
        const {id,budgetType,amount,description,handleDelete} = this.props;
        return (
            <div className="item" key={id}>
                <div className="item-description">
                    {description}
                </div>
                <div className="item-amount">
                    <div className="money" 
                        style={budgetType === '+' ? this.style.plusMoneyStyle:this.style.minusMoneyStyle}
                        >{budgetType}{amount}</div>
                    <div className="percentage"
                        style={budgetType === '+' ? this.style.plusPercentStyle:this.style.minusPercentStyle}
                        >%</div>
                    <div itemID={id}
                        className="delete"
                        style={budgetType === '+' ? this.style.plusDeleteStyle:this.style.minusDeleteStyle}
                        onClick={handleDelete}
                        >X</div>
                </div>
            </div>
        );
    }
}

export default Item;