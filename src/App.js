import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data';
import Tour from './components/Tour';
import Refresh from './components/Refresh';


function App() {
  const[tours, setTour] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTour(newTour);
  }

  if(tours.length === 0)
  {
    return <Refresh setTour={setTour} data={data} />
  }

  return (
    <div>
       <Tour tours= {tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
