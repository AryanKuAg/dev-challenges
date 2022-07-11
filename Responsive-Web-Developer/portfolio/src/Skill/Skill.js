import React from 'react'
import "./Skill.css"
import SkillComponent from './SkillComponent';

function Skill() {
  return (
    <div>
        <h3>FRONT END</h3>
        <SkillComponent name='React' percentage={70}/>
        <SkillComponent name='Javascript' percentage={80}/>
        <SkillComponent name='CSS' percentage={90}/>
        <SkillComponent name='Vue' percentage={70}/>
        <SkillComponent name='Redux' percentage={80}/>
        <SkillComponent name='Flutter' percentage={90}/>

    </div>
  )
}

export default Skill