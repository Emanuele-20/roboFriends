import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    
    // if (true) {
    //     throw new Error("Noooooo !!!!")
    // }
    return(

        <div>
            {
                robots.map((user, i ) => {     // use map method to return multiple Card components
                    return(
                        <Card 
                            key= {robots[i].id} //Special case, check below

                            id={robots[i].id} 
                            name={robots[i].name}
                            email={robots[i].email}
                        /> 
                    )
                })
            }
        </div>

    )

}

export default CardList;


//Special case: when we work with loops we MUST assign an unique key. 
//Becuse in case we wnat delete or modify 
//one card React won't know wich one we are referring to.