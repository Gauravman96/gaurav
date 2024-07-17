import './App.css';
import { NavLink, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Blog from './components/Blog';
function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li>
                <NavLink to='/'> Home</NavLink>
                <NavLink to='/about'> About</NavLink>
                <NavLink to='/support'> Support</NavLink>
                <NavLink to='/blog'> Blog</NavLink>
                <NavLink to='*'>  No Page Found</NavLink>
            </li>
            </ul>
          </nav>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/support' element={<Support/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='*'element={<div><h1>No Page Found</h1></div>}/>
              
            </Routes>
    </div>
  );
}

export default App;
