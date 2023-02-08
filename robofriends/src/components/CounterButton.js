import React from "react";
// PureComponent = only rerenders, if props change
// does shallow comparison
class CounterButton extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true
        } else {
            return false
        }
    }

    updateCount = () => {
        this.setState( state => { 
            return {count: state.count + 1}
        })
    }

    render() {
        console.log('CounterButton');
        return (
            <button color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
        );
    }
}

export default CounterButton;