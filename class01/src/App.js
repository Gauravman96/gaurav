import './App.css';
import Product from './components/Product';

function App() {
   const data=[
    {
      id:'p1',
      ItemName:"nirma",
      amount :100,
      date :new Date(2022,12,22)
    },
    {
      id:'p2',
      ItemName:"rin",
      amount :1001,
      date :new Date(2021,2,22)
    },
    {
      id:'p3',
      ItemName:"verrma",
      amount :102,
      date :new Date(2020,12,22)
    },
    {
      id:'p4',
      ItemName:"nirmaaa",
      amount :103,
      date :new Date(2012,12,22)
    }
   ]
   return (
    <div>
      <Product arr={data}/>
      </div>
   );
}

export default App;
