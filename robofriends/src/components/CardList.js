import React from "react";
import Card from './Card';
import SWCard from './SWCard';

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('NOOOOOOOO');
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={i}
                        // id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].gender}
                        // email={robots[i].email}
                    />
                    );
                })
            }
        </div>
    );
}

const CardList2 = ({ users, mode }) => {
    if (mode === "robots") {
        return (
            <div>
                {
                    users.map((user, i) => {
                        return (
                        <Card 
                            key={i} 
                            id={users[i].id} 
                            name={users[i].name} 
                            email={users[i].email}
                        />
                        );
                    })
                }
            </div>
        )
    } else {
        return (
            <div>
                {
                    users.map((user, i) => {
                        return (
                            <SWCard 
                                key={i} 
                                id={i} 
                                name={users[i].name} 
                                birthYear={users[i].birth_year}
                                eyeColor={users[i].eye_color}
                            />
                        )
                    })
                }
            </div>
        )
    }
    
}

export { CardList, CardList2};