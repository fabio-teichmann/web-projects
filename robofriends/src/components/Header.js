import React from "react";

class Header extends React.Component {
    constructor() {
        super();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log('header');
        return (
            <h1 className="f2">RoboFriends</h1>
        )
    }
}

export default Header;