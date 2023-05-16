import React from 'react'
import NavBar from './NavBar';
import Logo from './Logo';
import RouterComponents from './RouterComponents';
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
return (
  <Router>
    
    <div className='divNavBar'>
        <NavBar/>
    </div>
    <div>
        <Logo/>
    </div>
    <RouterComponents/>
 
  </Router>
);
  

}

export default App;
