


const Refresh= (props) => {
    return (
        <div className="h-screen p-11 flex flex-col justify-center items-center space-y-3  text-2xl">
           <p className="shadow-md font-bold p-1 rounded-sm w-[17%] text-center">No Tour Left</p>
           <button onClick={()=> props.setTour(props.data)} className=" rounded-md outline-double p-2">Refresh Tour</button>
        </div>
    )
}
export default Refresh;