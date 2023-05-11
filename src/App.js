import React from 'react'
import NavBar from './NavBar';
import RouterComponents from './RouterComponents';
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
return (
  <Router>
    
    <div>
        <NavBar/>

    </div>
    <RouterComponents/>
 
  </Router>
);
  

}

export default App;
