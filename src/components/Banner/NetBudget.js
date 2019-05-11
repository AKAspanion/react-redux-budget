import React from 'react';

class NetBudget extends React.Component {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    date = new Date();
    render() {
        return (
            <div className="net-budget">
                <h3 className="heading-3">Net Available Budget in month {this.months[this.date.getMonth()]} 2019:</h3>
                <div className="net-amount">
                    {this.props.totalBudget}
                </div>
            </div>
        );
    }
}

export default NetBudget;