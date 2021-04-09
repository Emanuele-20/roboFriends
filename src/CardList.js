import React from 'react';
//import { robots }  from './robots'
import Card from './Card'


const CardList = ({ robots }) => {
    
    return(

        <div>
            {
                robots.map((user, i ) => {     // use map method to return multiple components
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