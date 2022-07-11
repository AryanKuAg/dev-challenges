import React from 'react'
import HobbiesItem from './HobbiesItem'
import './Hobbies.css'

const hobbiesList = [{img:'https://source.unsplash.com/360x120/?Game',title:'Gaming',des:'Quisque feugiat malesuada molestie'},{img:'https://source.unsplash.com/360x120/?cooking',title:'Cooking',des:'Quisque feugiat malesuada molestie'},{img:'https://source.unsplash.com/360x120/?Biking',title:'Biking',des:'Quisque feugiat malesuada molestie'}]

function Hobbies() {
  return (
    <div className='hobbies'><h2>Hobbies</h2>
    <div className='hobbies__div'>
    {hobbiesList.map(hobby => <HobbiesItem key={hobby.title} img={hobby.img} title={hobby.title} des={hobby.des}/>)}
    </div>
    </div>
  )
}

export default Hobbies