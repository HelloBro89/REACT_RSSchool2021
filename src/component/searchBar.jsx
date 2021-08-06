import React from 'react';

const SearchBar = () => (
    <div style={{marginBottom: '10px', marginLeft: '10%'}}>
        <input style={{height: '50px'}} type="search" placeholder="Search here..." name="search" />
        <button style={{height: '50px',width: '60px' , paddingBottom: '1px'}} type="submit">Search</button>
    </div>
)

export default SearchBar