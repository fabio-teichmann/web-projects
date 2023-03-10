import React from "react";
import './Card.css';

const SWCard = ({id, name, birthYear, eyeColor}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w5">
            <img alt='robots' src={`https://robohash.org/${id}`} height={200}/>
            <div>
                <h3>{name}</h3>
                <p>Birth year: {birthYear}</p>
                <p>Eye-color: {eyeColor}</p>
            </div>
        </div>
    )
}

export default SWCard;