import {Route, Routes as Switch} from 'react-router-dom';
import React from 'react'
import Cats from './Cats';
import Home from './Home';
import Projects from './Projects';
function RouterComponents() {
  return (

    <div className='content'>
        <Switch>
            <Route path="/" element={<Home/> }/>
            <Route path="/cats" element={<Cats/> }/>
            <Route path="/projects" element={<Projects/> }/>
        </Switch>
    </div>

  )
}

export default RouterComponents
