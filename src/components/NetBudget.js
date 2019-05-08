import React from 'react';

class NetBudget extends React.Component {
    render() {
        return (
            <div className="net-budget">
                <h3 className="heading-3">Net Budget in month May 2019:</h3>
                <div className="net-amount">
                    +{this.props.totalBudget}
                </div>
            </div>
        );
    }
}

export default NetBudget;