import React from "react";
import { connect } from "react-redux";

import { CardList2 } from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import { getUsers, getStarWarsUsers } from "../api/userInfo";
import ModeButton from '../components/ModeButton';
// import { robots } from './robots';
import './App.css';

import { requestRobots, setSearchfield } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}
// dispatch === what triggers the action
const mapDispathToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// smart component, since it has STATE
class App extends React.Component {
    // state needs to be assigned in constructor
    constructor() {
        super();
        this.state = {
            // can change
            // users: [],
            // searchfield: '',
            mode: "robots"
        };
    }

    // part of React --> no arrow function
    async componentDidMount() {
        
        // const users = await getUsers();
        // this.setState({ users: users});
        this.props.onRequestRobots();
    }

    async componentDidUpdate(prevProps, prevState) {
        // let users = this.state.users;
        if (prevState.mode !== this.state.mode) {
            this.setState({users: []})
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

    // onSearchChange = (event) => {
    //     // console.log(event);
    //     this.setState({ searchfield: event.target.value })
    // }

    onClickChange = (event) => {
        console.log(event.target.innerText.toLowerCase());
        this.setState({ mode: event.target.innerText.toLowerCase() })
    }
    // classes need a `render()` function
    render() {
        const { users, mode} = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filterRobots = robots.filter(user => {
            return user.name.toLowerCase().includes(searchField.toLowerCase())
        });

        if (isPending) {
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <ModeButton clickChange={this.onClickChange} name="Star Wars"/>
                    <ModeButton clickChange={this.onClickChange} name="Robots"/>
                    <Scroll>
                        <ErrorBoundary>
                            <h1 className="tc">Loading...</h1> 
                        </ErrorBoundary>
                    </Scroll>
                    
                </div>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispathToProps)(App);