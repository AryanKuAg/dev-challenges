import React from 'react'
import "./ExperienceItem.css"


function ExperienceItem(props) {
    
  return (
    <div className='expItem'>
        <img src={props.logo} alt='My Image file' id='exp__logo'/>
        <div className='exp__flex__div'><p>{props.duration}</p> <h3>{props.title}</h3> <p>{props.des}</p></div>
    </div>
  )
} 

export default ExperienceItem