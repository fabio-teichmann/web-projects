import React from 'react';

// children --> this function wrapps other components
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '35rem', margin: '10px '}}>
            {props.children}
        </div>
    )
}

export default Scroll;