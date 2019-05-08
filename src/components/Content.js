import React from 'react';
import ItemList from './ItemList';

class Content extends React.Component {

    onDeleteClick = (id) =>{
        this.props.onDeleteClick(id);
    }

    render() {
        const {items} = this.props;
        return (
            <div className="content">
                <ItemList
                    items={items.incomeItems}
                    budgetType = '+'
                    name="INCOME" 
                    color="#5C965D"
                    onDeleteClick={this.onDeleteClick}
                    />
                <ItemList 
                    items={items.expenseItems}
                    budgetType = '-'
                    name="EXPENSE" 
                    color="#D4383E"
                    onDeleteClick={this.onDeleteClick}
                />
            </div>
        );
    }
}

export default Content;