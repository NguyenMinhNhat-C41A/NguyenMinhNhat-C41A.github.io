import GameCard from './GameCard'
import React from 'react'
const gamesInfo = [
    {name:"TicTacToe", link:'./tictactoe'},
]    
    export default function GamesList() {
    return (
        <div style={{
            width: "25%",
            height:"25%"}}
        >
            {
                gamesInfo.map((i,index) => (
                <GameCard item={i}/>
                )
            )  
            }
        </div>
    )
      
    }
    
