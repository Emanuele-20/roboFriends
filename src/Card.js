import React from 'react';



const Card = ({name, email, id}) => {  //inside the parameter act destructuring, ES6


    return(
        
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt='robots' src = {`https://robohash.org/${id}?100x100`} />

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div> 
        
    );


} 
 
export default Card;

// export default because I'm exporting just one thing and, inside the index.js file I'll import and descructure {  }