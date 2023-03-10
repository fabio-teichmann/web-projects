import React from "react";
import './Card.css';

// destructuring directly at recieving
const Card = ({id, name, email}) => {
    // const {id, name, email} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w5">
            <div>
            <button type="button">X</button>
            </div>
            <img alt='robots' src={`https://robohash.org/${id}`} height={200}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;