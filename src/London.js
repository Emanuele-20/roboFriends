import React from 'react';



class London extends React.Component{

    render(){

        return(

            <div className = "f3 tc">
            <p >What you think about the climate here ?</p>
              <p>{this.props.addAProp}</p>
            </div>

        )

    }


}


export default London;