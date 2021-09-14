import React, { Component } from 'react'

class Border extends Component {
    render() {
        return (
            <div>
                <div style={{"border":"2px solid red"}}>
                {this.props.children}
                </div>

            </div>
        )
    }
}

export default Border