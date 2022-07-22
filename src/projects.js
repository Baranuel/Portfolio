import image from './assets/projects_images/modul-foto.png'
import bobeh from './assets/projects_images/bobeh.png'
import todo from './assets/projects_images/todo.png'
import movieDb from './assets/projects_images/movieDb.png'
import clock from './assets/projects_images/clock.png'


const projects = [
    {
        id:1,
        title:"Modul-foto",
        description:"Re-design of an existing website for a photo studio located in Copenhagen, with the goal of separating 2 main target groups.",
        type:"Website",
        time_line: 4,
        technology:["HTML", "CSS","Java-Script", "Vue.js"],
        role:["UX/UI", "Front-end"],
        link:"https://modul-foto.vercel.app/#/",
        image:image
    },
    {
        id:2,
        title:"Bobeh-blokhus",
        description:"The Client is a care center, the goal of the redesign was to unify different housings, create updatable content through CMS,and also visually represent their values",
        type:"Website, CMS",
        time_line: 4,
        technology:["HTML", "CSS","Java-Script", "Laravel-blade", "PHP","WordPress"],
        role:["UX/UI", "Front-end"],
        image:bobeh
    },
    {
        id:3,
        title:"React-todo",
        description:"A fun side project for practicing state and hooks in React, an elaborate todo-application",
        type:"Web-app",
        time_line: 1,
        technology:["HTML", "CSS","Java-Script", "React"],
        role:["Front-end"],
        link:"https://react-todo-brutalism.vercel.app/",
        image:todo
    },
    {
        id:4,
        title:"Nuxt-movie-database",
        description:"About the project and the client",
        type:"Website",
        time_line: 4,
        technology:["HTML", "CSS","Java-Script"],
        role:["UX/UI", "Front-end"],
        link: "https://nuxtjs-chi-one-65.vercel.app/",
        image:movieDb
    },
    {
        id:5,
        title:"Particle clock",
        description:"About the project and the client",
        type:"WebGL",
        time_line: 1,
        technology:["Three-js","Java-Script"],
        role:["Front-end"],
        link: "https://particle-clock.vercel.app/",
        image:clock
    },
]

export default projects