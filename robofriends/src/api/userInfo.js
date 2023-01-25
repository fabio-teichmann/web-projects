// import React from "react";

const getUsers = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}

async function getStarWarsUsers() {
    const response = await fetch('https://swapi.dev/api/people');
    const users = await response.json();
    // const json = await JSON.parse(users);
    // console.log(json);
    return users;
}

export { getUsers, getStarWarsUsers };