import React from 'react';



const SearchBox = ({searchChange}) => {

    return(

        <div className='pa2'>

                <input 
                className='pa3 ba b--black bg-light-red'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}   //is an event, every time the input changes
                />
                
        </div>

    )

}


export default SearchBox;