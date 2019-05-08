import React from 'react';
import Item from './Item';

class ItemList extends React.Component {

    headerStyle = {
        color: this.props.color
    }

    handleDelete = (event) =>{
        this.props.onDeleteClick( event.target.getAttribute('itemID'));
    }

    renderItems = (items) =>{
        return (
            <div>
                {items.map(item => {
                    return (
                        <Item
                            id={item.id}
                            amount={item.amount}
                            description={item.description}            
                            budgetType = {this.props.budgetType}
                            handleDelete = {this.handleDelete}
                        />
                    )
                })}
            </div>
        )
    }

    render() {
        const {name,items} = this.props;
        return (
            <div className="item-list">
                <div className="header-list" style={this.headerStyle}>
                    {name}
                </div>
                {this.renderItems(items)}
            </div>
        );
    }
}

export default ItemList;