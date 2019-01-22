import React from 'react';

const SearchBox=({searchfield, searchChange})=>{
    return(
        <div >
            <input 
            className='ba pa3 b--green bg-lightest-blue tc'
            type='search' 
            placeholder='Search Robots' 
            onChange={searchChange} />
        </div>
    );
}
export default SearchBox;