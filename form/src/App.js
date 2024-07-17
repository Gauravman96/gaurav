import {useState} from 'react';
import './App.css';

function App() {
  
 const [data ,setData] = useState({
  name: 'gaurav',
  email:'abx@gmail.com'
 });

 function handleChange(event){
  setData({...data ,[event.target.name]: event.target.value});

 }

 function handleSubmit(event){
  event.preventDefault();
  console.log(data);
 }
  


  return (
    <div>
     <form onSubmit={handleSubmit}>
      <input className='big' type="text" onChange={handleChange} value ={data.name} name='userName' placeholder='Name' />
      <input className='big' type="email" onChange={handleChange} value={data.email} name='email' placeholder='Email' />
      <button>Submit</button>
     </form>
      
    </div>
  );
}

export default App;
