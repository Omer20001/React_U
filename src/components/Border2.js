import React, { Component } from 'react'

 class Border2 extends Component {
    render() {
        return (
            <div>
            <br />
            
            <h1>Props Children</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Border2;