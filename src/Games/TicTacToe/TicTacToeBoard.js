import React from 'react'
import Box from './Box'
import './TicTacToeStyles/TicTacToeBoard.css'

function TicTacToeBoard() {
  return (
    <div className='wholeBoard'>
      <div className='boardRow'>
        <Box/>
        <Box/>
        <Box/>
      </div>
      <div className='boardRow'>
        <Box/>
        <Box/>
        <Box/>
      </div>
      <div className='boardRow'>
        <Box/>
        <Box/>
        <Box/>
      </div>
    </div>
  )
}

export default TicTacToeBoard
