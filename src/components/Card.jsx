import React from "react";

const Card = (props) => {
    return (
        <dv>
            <img src={props.tour.image} />
            <h1>{props.tour.price}</h1>
            <h1>{props.tour.name}</h1>
            <p>{props.tour.info}</p>
            <button onClick={() => props.getRemoveid(props.tour.id)}>Not Interested</button>
        </dv>
    )
}
export default Card;