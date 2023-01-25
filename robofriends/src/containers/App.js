import React from "react";
import { CardList, CardList2 } from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import { getUsers, getStarWarsUsers } from "../api/userInfo";
import ModeButton from '../components/ModeButton';
// import { robots } from './robots';
import './App.css';

// smart component, since it has STATE
class App extends React.Component {
    // state needs to be assigned in constructor
    constructor() {
        super();
        this.state = {
            // can change
            users: [],
            searchfield: '',
            mode: "robots"
        };
    }

    // part of React --> no arrow function
    async componentDidMount() {
        // OLD VERSION:
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({ robots: users }));
        // let users = [];
        // if (this.state.mode === "star wars") {
        //     const data = await getStarWarsUsers();
        //     users = data.results;
        //     // console.log(users);
        // } else if (this.state.mode === "robots") {
        //     users = await getUsers();
        //     // console.log(users);
        // }
        const users = await getUsers();
        this.setState({ users: users});
    }

    async componentDidUpdate(prevProps, prevState) {
        // let users = this.state.users;
        if (prevState.mode !== this.state.mode) {
            let users;
            if (this.state.mode === "star wars") {
                const data = await getStarWarsUsers();
                users = data.results;
            } else if (this.state.mode === "robots") {
                users = await getUsers();
            }
            this.setState({ users: users});
        }
        
        
    }

    onSearchChange = (event) => {
        // console.log(event);
        this.setState({ searchfield: event.target.value })
    }

    onClickChange = (event) => {
        console.log(event.target.innerText.toLowerCase());
        this.setState({ mode: event.target.innerText.toLowerCase() })
    }
    // classes need a `render()` function
    render() {
        const { users, searchfield, mode} = this.state;
        const filterRobots = users.filter(user => {
            return user.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if (!users.length) {
            return <h1 className="tc">Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <ModeButton clickChange={this.onClickChange} name="Star Wars"/>
                    <ModeButton clickChange={this.onClickChange} name="Robots"/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList2 users={filterRobots} mode={mode}/> 
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
        
    }
}

export default App;