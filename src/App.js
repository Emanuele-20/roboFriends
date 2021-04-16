import React from 'react';
import CardList from './CardList'
import { robots } from './robots' //{ } contain multiple elements so we to import with {}, exported without 'default'
import SearchBox from './SearchBox.js'



class App extends React.Component {

    constructor(){

        super()
        this.state = {
            robots: robots, 
            searchfield: ''
        }
        
    }

    render(){

        return(

            <div className="tc"> 
        
                <h1>RoboFriends</h1>
        
                <SearchBox />
        
                <CardList robots={robots} />
        
            </div>   
    
        )

    }



}

export default App;