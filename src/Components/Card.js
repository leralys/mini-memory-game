import React from 'react';
import './Card.css';


function Card(props) {
    return (
        <figure
            className="Card" onClick={() =>
                props.handleClick({ id: props.id, clicked: !props.clicked })}>
            <img className="Card-image" src={props.image} />
            <figcaption className="Card-figcaption">
                <span className="bold">Name:</span> {props.name}
            </figcaption>
            <figcaption className="Card-figcaption">
                <span className="bold">Occupation:</span> {props.occupation}
            </figcaption>
        </figure>
    )
}


export default Card;