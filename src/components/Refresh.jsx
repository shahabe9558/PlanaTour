


const Refresh= (props) => {
    return (
        <div>
           <p>No Tour Left</p>
           <button onClick={()=> props.setTour(props.data)}>Refresh Tour</button>
        </div>
    )
}
export default Refresh;