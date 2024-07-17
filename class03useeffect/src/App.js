import './App.css';
import {useState , useEffect} from 'react';


function App() {
  const [text ,setText] = useState('');

  // //variation1 ; every time render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE");
  // });

  //variation2 ;  single time render
  useEffect(()=>{
    console.log("UI RENDERING DONE");
  },[]);

  //variation3; every time render
  useEffect(()=>{
    console.log("UI RENDERING DONE");
  });


  function inputHandler(e){
     setText(e.target.value);
     console.log(text)
  }

  return (
    <div>
          <h1> useEffect</h1>
          <input type='text' onchange ={inputHandler}/>

    </div>
  );
}

export default App;
