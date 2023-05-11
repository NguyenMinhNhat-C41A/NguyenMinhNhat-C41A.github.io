import React from 'react'

function ProjectBox(props) {
    const {item} = props;

  return (
    <div className='projectBox'>
        <p>{item.name}</p>
        <p>{item.content}</p>
    </div>
  )
}

export default ProjectBox
