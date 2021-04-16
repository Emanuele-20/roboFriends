import React from 'react';
import CardList from './CardList'
import { robots } from './robots' //{ } contain multiple elements so we to import with {}, exported without 'default'
import SearchBox from './SearchBox.js'



class App extends React.Component {

    constructor(){

        super()
        this.state = {
            robots: robots, // app is allows to change robots, because is inside STATE
            searchfield: ''
        }

    }

    onSearchChange = (event) => {

        this.setState({searchfield: event.target.value}) //.target.value for receive back the real value

    }

    render(){

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })


        return(

            <div className="tc"> 
        
                <h1>RoboFriends</h1>
        
                <SearchBox searchChange={this.onSearchChange}/>
        
                <CardList robots={filteredRobots} />
        
            </div>   
    
        )

    }



}

export default App;