import React, { useState } from "react";

const Card = (props) => {
    const[readmore, setReadmore] = useState(false);
    let description = readmore ? props.tour.info : `${props.tour.info.substring(0, 200)}....`;
    return (
        <dv>
            <img src={props.tour.image} />
            <h1>{props.tour.price}</h1>
            <h1>{props.tour.name}</h1>
            <div>
                {description}
               <span onClick={()=> setReadmore(!readmore)}>
                {readmore ? "Show Less" : "Show More"}
               </span>
            </div>
            <button onClick={() => props.getRemoveid(props.tour.id)}>Not Interested</button>
        </dv>
    )
}
export default Card;