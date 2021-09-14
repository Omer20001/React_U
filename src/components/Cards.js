import React, { Component } from 'react'
import Border from './Border';
import Border2 from './Border2';
import Card from './Card';

class Cards extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Card title="Title1" />
                    <Card title="Title2" />
    

                </div>

                    {/* Props Children  Border Acib Baglayirsan Daha sonra Card-i
                     onun icine child olaraq elave edirik daha sonra Border.Js de 
                    props.childrenle cagirirq*/}
                <Border ><Card title="Title2" /> </Border>

                <Border2>  <Card title="Title1" /></Border2>
            </div>
        )
    }
}
export default Cards;