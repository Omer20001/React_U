import React, { Component } from 'react'
import south1 from '../image/img2.gif'
import south from '../image/southern.jpg'

class Globus extends Component {
    render() {
    const hemisphere = this.props.latitude > 0 ? "Simal Yarimkuresindesiniz" :"Cenub yarimkuresi"
    const image = this.props.latitude > 0 ? south1 : south
    
        return (
            <div>

            <h1>{hemisphere}</h1>
            <img src={image} alt="" />
            </div>
        )
    }
}
export default Globus
