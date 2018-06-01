import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Counter from './Counter';
import {incrementCount, decrementCount, resetCount}  from './../actions/counterAction';

class CounterApp extends Component{
    
    render() {
        return (
            <div>
                <Header />
                <Counter 
                    count={this.props.count} 
                    inc={this.props.onIncrementCount} 
                    dec={this.props.onDecrementCount}
                    reset={this.props.onResetCount}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.counter;
};

const mapDispatchToProps = {
    onIncrementCount: incrementCount,
    onDecrementCount: decrementCount,
    onResetCount: resetCount 
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);