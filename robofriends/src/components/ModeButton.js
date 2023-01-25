import React from "react";

const ModeButton = ({clickChange, name}) => {
    return (
        // <div>
            <button type="button" onClick={clickChange}>{name}</button>
        // </div>
    )
}

export default ModeButton;