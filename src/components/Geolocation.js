import React, { Component } from 'react'
import Globus from './Globus'

 class Geolocation extends Component {
     constructor(props){
         super(props)
         this.state = {
             latitude : 24,
             errorMessage : ""
         }
      
     }

     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({latitude:position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})

        )
     }

     
    render() {
        {
            if(this.state.errorMessage && !this.state.latitude){
                return <div>{this.state.errorMessage}</div>
            }
            if(!this.state.errorMessage && this.state.latitude){
                return <div> <Globus latitude={this.state.latitude} /> </div>
            }
            else{
                return <div>Loading...</div>
            }
        }

    }
}
export default Geolocation
