import React, {useState, useEffect} from 'react'

import projects from '../../projects'
import ProjectItem from './ProjectItem'
import Selection from './Selection'
import gsap from 'gsap'

function Work() {

    const [selectedProject, setSelectedProject] = useState({

    })

    useEffect( () => {
        setSelectedProject(projects[0])
        
    },[])


    useEffect(() =>{

      gsap.from(".project-details", {
        opacity:1,
        translateX:"-100%",
        duration: 0.2
      });
      gsap.to(".project-details", {
        opacity:1,
        translateX:"0%",
        duration: 0.5,
      });
      gsap.from(".project-image", {
        opacity:1,
        translateX:"-100%",
        duration: 0.2
        
      });
      gsap.to(".project-image", {
        opacity:1,
        translateX:"0%",
        duration: 0.5,
      });
        
    },[selectedProject])
   

    const selectProject = id => {
        projects.map( project => {
            return project.id === id && project.id !== selectedProject.id ? setSelectedProject({...project}) : ""
        })
    }

    const createListItems = projects.map( (project,index) => {
        return <ProjectItem key={project.id} project={project} activeProject={selectedProject} selectProject={() => {selectProject(project.id)}} />
    })

    const createMobileSelection = projects.map((project, index) => {
        return <Selection  key={project.id} project={project} activeProject={selectedProject} selectProject={() => {selectProject(project.id)}} />
    })

    const tech = selectedProject.technology ? selectedProject.technology.map((tech, index) => (<p key={index}>{tech}</p>)) : ""


    const role = selectedProject.role ? selectedProject.role.map((role, index) => (<p key={index}>{role}</p>)) : ""


    
  return (
    <div className='front-page-work'>
        <div className='work-section'>
            <div className='work-image'>
            <img className='project-image' src={selectedProject.image} alt="" />
                <div className='project-details'>
                {/* <div className="work-cover"></div> */}
                    <div className='white-label'>
                    <h2 className='title'>{selectedProject.title}</h2>
                    <div className='links-div'>
                     <a className='link' href={selectedProject.link} target="blank">Live preview</a>
                    <a className='case-link' href=""> Case study</a>
                    </div>
                    </div>
                    <p className='description'>{selectedProject.description}</p>
                    <div className='project-meta-data'>
                        <div className='type'>
                            <h3>Product Type</h3>
                            <p>{selectedProject.type}</p>
                        </div>
                        <div className='time'>
                            <h3>Time Line</h3>
                            <p>{selectedProject.time_line} Weeks</p>
                        </div>
                        <div className='technology'>
                            <h3>Technology</h3>
                            <div className='technology-list'>
                                {tech}
                            </div>
                        </div>
                        <div className='role'>
                            <h3>Role</h3>
                            <div className='role-list'>
                              {role}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='projects-list'>
                <h1 className='section-heading'>Some of my work</h1>
                <ul className='projects-table'>
                    {createListItems}
                </ul>
            </div>
            <div className='mobile-project-select'>
                        {createMobileSelection}
            </div>
        </div>
    </div>
  )
}

export default Work