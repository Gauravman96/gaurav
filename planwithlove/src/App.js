import './App.css';
import data from './data';
import Tour from './components/Tour';
import { useState } from 'react';

function App() {
  const[tour ,setTour] = useState(data);
  function BtnHandler(id){
    const newTour =tour.filter(tt=>tt.id != id);
    setTour(newTour);
  }

  function refreshHandler(){
    setTour(data);
  }
  
  if(tour.length===0){
    return(
      <div>
        <h2> No tour left</h2>
        <button  onClick ={refreshHandler}> Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tour data ={tour} BtnHandler={BtnHandler}/>
      
    </div>
  );
}

export default App;
