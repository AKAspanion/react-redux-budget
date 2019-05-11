import React from 'react';
import {connect} from 'react-redux'

import ItemList from './ItemList';

class Content extends React.Component {

    render() {
        const {items} = this.props;
        return (
            <div className="content">
                <ItemList
                    items={items.incomeItems}
                    budgetType = '+'
                    name="INCOME" 
                    color="#5C965D"
                    />
                <ItemList 
                    items={items.expenseItems}
                    budgetType = '-'
                    name="EXPENSE" 
                    color="#D4383E"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.budget.items
    }
}

export default connect(mapStateToProps, {})( Content);