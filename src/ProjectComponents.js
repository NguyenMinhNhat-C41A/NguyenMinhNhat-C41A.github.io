import React from 'react'
import MediaCard from './Card'


const info = [
  {name:"BattleTextSim4", content:""},
  {name:"Matching-Patterns", content:""},
]

function ProjectComponents() {
  return (
    <div style={{
      width: "25%",
      height:"25%"}}
    >
      {
          info.map((i,index) => (
            <MediaCard item={i}/>
          )
        )  
        }
    </div>
  )
}

export default ProjectComponents
