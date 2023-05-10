import React from 'react'
import NavBar from './NavBar';
import Cats from './Cats';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
function App() {
return (
  <Router>
    <div>
      <React.Fragment>
        <NavBar/>
      </React.Fragment>
    </div>
    <div className='content'>
        <Switch>
          <Route path="/" element={<Home/> }>
          </Route>
        </Switch>
      </div>
  </Router>
);
  

}

export default App;
