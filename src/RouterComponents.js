import {Route, Routes as Switch} from 'react-router-dom';
import React from 'react'
import Cats from './Cats';
import Home from './Home';
import Games from './Games/Games'
import Projects from './Projects';
import TicTacToe from './Games/TicTacToe/TicTacToe';
function RouterComponents() {
  return (

    <div className='content'>
        <Switch>
            <Route index path="/web" element={<Home/> }/>
            <Route path="/cats" element={<Cats/> }/>
            <Route path="/projects" element={<Projects/> }/>
            <Route path="/games" element={<Games/> }/>
            <Route path="/tictactoe" element={<TicTacToe/>}/>
        </Switch>
    </div>

  )
}

export default RouterComponents
