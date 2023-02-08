import React from "react";

const SearchBox = ({ searchField, searchChange}) => {
    console.log('searchBox');
    return (
        <div>
            <input
                className="pa3 ba b--green bg-lightest-blue" 
                type='search' 
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
        
    )
}

export default SearchBox;