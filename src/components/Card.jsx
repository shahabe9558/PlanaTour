import React, { useState } from "react";

const Card = (props) => {
    const[readmore, setReadmore] = useState(false);
    let description = readmore ? props.tour.info : `${props.tour.info.substring(0, 200)}....`;
    return (
        <div className="flex flex-col w-[400px] max-h-fit shadow-lg rounded-md p-5 gap-y-1">
            <img src={props.tour.image} className="w-[380px] aspect-square object-cover"/>
            <h1 className="text-green-300 text-xl font-bold"> ₹ {props.tour.price}</h1>
            <h1 className="text-2xl font-extrabold">{props.tour.name}</h1>
            <div>
                {description}
               <span onClick={()=> setReadmore(!readmore)} className=" text-blue-400 cursor-pointer">
                {readmore ? "Show Less" : "Show More"}
               </span>
            </div>
            <button onClick={() => props.getRemoveid(props.tour.id)} className=" w-[80%] mt-7 m-auto border border-red-400 bg-red-100 font-bold rounded-md py-1 outline-double">Not Interested</button>
        </div>
    )
}
export default Card;