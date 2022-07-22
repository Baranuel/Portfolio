import React from 'react'

function ProjectItem(props) {

    const {selectProject, activeProject, project} = props

  return (
    <li className={`${activeProject.id === project.id ? "active" : "" } project-list-item`} onClick={selectProject}>
        <div className='fill'></div>
            <span  className='number'>#{project.id} </span><span className='title'>{project.title}</span>
    </li>
  )
}

export default ProjectItem