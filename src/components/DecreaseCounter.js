import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increaseCounter,decreaseCounter} from '../redux/actions/counterActions'
import IncreaseCounter from './IncreaseCounter';
class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{this.props.dispatch(decreaseCounter())}}>Azalt</button>
            </div>
        );
    }
}
function mapToDispatchToProps(dispatch){
return {actions:bindActionCreators(decreaseCounter,dispatch)}
}
export default connect(mapToDispatchToProps)(DecreaseCounter)