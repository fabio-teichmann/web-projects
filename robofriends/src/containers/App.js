import React from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import './App.css';

// smart component, since it has STATE
class App extends React.Component {
    // state needs to be assigned in constructor
    constructor() {
        super();
        this.state = {
            // can change
            robots: [],
            searchfield: ''
        };
    }

    // part of React --> no arrow function
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    // classes need a `render()` function
    render() {
        const { robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if (!robots.length) {
            return <h1 className="tc">Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            );
        }
        
    }
}

export default App;