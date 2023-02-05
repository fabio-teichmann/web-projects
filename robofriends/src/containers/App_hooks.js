import React, {useState, useEffect} from "react";
import { connect } from "react-redux";

import { CardList2 } from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import { getUsers, getStarWarsUsers } from "../api/userInfo";
import ModeButton from '../components/ModeButton';
// import { robots } from './robots';
import './App.css';

import { setSearchfield } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}
// dispatch === what triggers the action
const mapDispathToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value))
    }
}


const App_hooks = ({searchField}) => {
    const [users, setUsers] = useState([]);
    // const [searchField, setSearchfield] = useState('');
    const [mode, setMode] = useState('robots');
    // const [store_, setStore] = useState(store)

    useEffect(() => {
        // console.log(store_.getState());
        (async () => {
            const users = await getUsers();
            setUsers(users);
        })();
    },[])

    useEffect(() => {
        (async () => {
            setUsers([])
            let users;
            if (mode === "star wars") {
                const data = await getStarWarsUsers();
                users = data.results;
            } else if (mode === "robots") {
                users = await getUsers();
            }
            setUsers(users);
        })();
    }, [mode])

    // const onSearchChange = (event) => {
    //     setSearchfield(event.target.value);
    // }

    const onClickChange = (event) => {
        setMode(event.target.innerText.toLowerCase());
    }

    const filterRobots = users.filter(user => {
        const { searchField } = this.props;
        return user.name.toLowerCase().includes(searchField.toLowerCase())
    });

    if (!users.length) {
        return <h1 className="tc">Loading...</h1>
    } else {
        return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={this.props.onSearchChange}/>
                <ModeButton clickChange={onClickChange} name="Star Wars"/>
                <ModeButton clickChange={onClickChange} name="Robots"/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList2 users={filterRobots} mode={mode}/> 
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App_hooks);