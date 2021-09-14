import React, { Component } from 'react';
import img1 from '../image/img1.jpg';

class Card extends Component {
    render() {
        return (
            <div>
            <br />
            <h1>Image Elave Etme ve Props-lar</h1>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={img1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
