import React from 'react';
import './Hello.css';

// Here I'm creating components
class Hello extends React.Component{


    render(){   

        return (
            <div className='f2 tc'>
                <h1>Hello London</h1>
                <p>Here in London learning React</p>
                    <p>{this.props.greeting}</p> 
                {/* this is referring to the Hello Class */}
            </div>
        )

    }

 


}

export default Hello;