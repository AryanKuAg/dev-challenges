import React from 'react'
import "./ProjectGrid.css"
import ProjectCard from './ProjectCard'
import ShadowCard from '../ShadowCard'

function ProjectGrid(props) {


  return (
    <div className='projectGrid'>

        {props.projectList.map((project, index) => {

            return <ShadowCard><ProjectCard data={project} key={project.title}/></ShadowCard>;
        })}
    </div>
  )
}

export default ProjectGrid