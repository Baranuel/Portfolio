import React from 'react'

function Selection(props) {

    const {selectProject, activeProject, project} = props

  return (
    <div className={`${activeProject.id === project.id ? "active-selection" : "" } project-list-item selection-button`} onClick={selectProject} ></div>
  )
}

export default Selection