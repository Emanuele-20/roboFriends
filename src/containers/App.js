import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry"
import './App.css'


class App extends React.Component { 

    constructor(){
        super()
        this.state = {
            robots: [], 
            searchfield: ''
        } 
    }
    //now APP owns that STATE that includes robots it is allow to changhe it

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')//nothing attached because fetch is a method built in the window object
        .then(response => {
           return response.json()
        })
        .then(users => { 
        this.setState({robots: users})
        })
    }


    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value}) 
    }
    //every time that input change (from searchBox we get an EVENT) 
    //because we want "THIS" to be linked to the App class and not to the <input> in SearchBox.js
    //Every time we create our own method, use arrow function, 


    render(){
    const { robots, searchfield } = this.state //refactoring  with destructuring
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return  !robots.length ? 
        <h1>Loading......</h1> : //in case the loading of the robots will take different seconds
            (
                <div className="tc"> 
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* here I want that everytime I write something inside the SearchBox
                    something happen, like run the onSearchChange function, 2nd I have to pass that function 
                    inside the SearchBox component as props, 3rd I have to pass the onchange event into the 
                    SearchBox component (onChange={searchChange})*/}
                    
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                            {/* instead pass all the robots, we pass just the filtered one inside the CardList component */}
                        </ErrorBoundry>
                    </Scroll>
                </div>   

            )
    }
}


    

export default App;