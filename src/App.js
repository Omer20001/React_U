import React, { Component } from 'react'
import './index.css'
 class App extends Component {

  state ={
    btn_color : "button-red"
  }

  onClick=(e)=>{
    this.setState({
      btn_color:"button-yellow"
    })
  }
  render() {
    return (
      <div>

      <h1>State Ve setState Numune</h1>
        <button onClick={this.onClick} className={this.state.btn_color} >Click</button>
      </div>
    )
  }
}

export default App
