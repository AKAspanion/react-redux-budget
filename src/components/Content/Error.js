import React from 'react';
import {connect} from 'react-redux';


import {
    updateError
} from '../../actions';
import { clearTimeOuts } from '../../helpers';

class Error extends React.Component {

    showCross = () =>{
        if(this.props.error === ''){
            return ''
        }
        return (
            <>
                &#10060;
            </>
        );
    }

    handleButtonClick = () =>{
        clearTimeOuts();
        this.props.updateError('');
    }

    render() {
        return (
            <div className="error" onClick={this.handleButtonClick}>
                <div>
                    {this.props.error || ''}
                </div>
                <div>
                    {this.showCross()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.budget.error
    }
}

export default connect(mapStateToProps, {updateError})(Error);