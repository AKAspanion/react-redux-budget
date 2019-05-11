import React from 'react';
import Item from './Item';

class ItemList extends React.Component {

    headerStyle = {
        color: this.props.color
    }

    renderItems = (items) =>{
        return (
            <div>
                {items.map(item => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            amount={item.amount}
                            description={item.desc}            
                            budgetType = {this.props.budgetType}
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