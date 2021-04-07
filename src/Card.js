import React from 'react';
// First Component with function and no with Class



const Card = ({name, email, id}) => {  //within the parameter we can do destructuring, ES6


    return(
        
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt='robots' src = {`https://robohash.org/${id}?200x200`} />

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div> 
        
    );


} 
 
export default Card;

// export default because I'm exporting just one thing and, inside the index.js file I'll import and descructure {  }