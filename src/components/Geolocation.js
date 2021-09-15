import React, { Component } from 'react'

 class Geolocation extends Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)

        )
        return (
            <div>
            
                <h1>Salam</h1>
            </div>
        )
    }
}
export default Geolocation
