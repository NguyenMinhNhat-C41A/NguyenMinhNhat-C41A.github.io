import React from 'react'
import NavBar from './NavBar';
import Cats from './Cats';
import Home from './Home';
import Projects from './Projects';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
function App() {
return (
  <Router>
    <div>
        <NavBar/>
    </div>
    <div className='content'>
        <Switch>
          <Route path="/" element={<Home/> }/>
          <Route path="/cats" element={<Cats/> }/>
          <Route path="/projects" elements={<Projects/> }/>
        </Switch>
      </div>
  </Router>
);
  

}

export default App;
