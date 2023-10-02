
import React from "react";
import Card from "./Card";


const Tour = (props) => {
    function getid(id){
        props.removeTour(id)
    }
    return(
       <div>
          <h1>Plan With Love</h1>
          <div>
             {
                props.tours.map((tour) => {
                    return <Card tour={tour} getRemoveid = {getid}/>
                })
             }
          </div>

       </div>
    )
}
export default Tour;