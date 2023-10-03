
import React from "react";
import Card from "./Card";


const Tour = (props) => {
    function getid(id){
        props.removeTour(id)
    }
    return(
       <div className="w-10/12 border border-red-400 flex flex-col m-auto items-center">
          <h1 className="bg-slate-200 text-center outline-dashed rounded-md py-1 px-4 mt-3 font-extrabold">Plan With Love</h1>
          <div className="mt-3 flex justify-center items-center flex-wrap space-x-4 space-y-3">
             {
                props.tours.map((tour) => {
                    return <Card key={tour.id} tour={tour} getRemoveid = {getid}/>
                })
             }
          </div>

       </div>
    )
}
export default Tour;