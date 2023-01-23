import React from "react";
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
        <div className="tc">
            <h1>Hello World!!!</h1>
            <p>{this.props.greeting}</p>
        </div>
        );
    }
}

// functional component
const Hello2 = (props) => {
    return (
        <div className="tc">
            <h1>That right</h1>
            <p>{props.greeting}</p>
        </div>
    );
}

export { Hello, Hello2 };
// export default Hello2;