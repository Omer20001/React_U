import React, { Component } from 'react'
import Card from './Card';

class Cards extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Card title="Title1" />
                    <Card title="Title2" />
                </div>
            </div>
        )
    }
}
export default Cards;