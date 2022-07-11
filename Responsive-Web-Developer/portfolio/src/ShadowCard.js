import React from 'react'
import './ShadowCard.css'

function ShadowCard(props) {
  return (
    <div className='shadowCard__box' >{props.children}</div>
  )
}

export default ShadowCard