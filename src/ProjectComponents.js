import React from 'react'
import MediaCard from './Card'


const info = [
  {name:"BattleTextSim4", link:"https://github.com/NguyenMinhNhat-C41A/BattleTextSim4"},
  {name:"Matching-Patterns", link:"https://github.com/NguyenMinhNhat-C41A/Matching-Patterns"},
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
