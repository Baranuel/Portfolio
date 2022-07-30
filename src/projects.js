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
        technology:["Holy-trinity", "Vue.js"],
        role:["UX/UI", "Front-end"],
        link:"https://modul-foto.vercel.app/#/",
        github:"https://github.com/Baranuel/modul-foto",
        image:image
    },
    {
        id:2,
        title:"Bobeh-blokhus",
        description:" the goal of the redesign was to unify different housings, create updatable content through CMS,and visually represent their values",
        type:"Website, CMS",
        time_line: 4,
        technology:["Holy-trinity", "Laravel-blade", "PHP","WordPress"],
        github:"https://github.com/Baranuel/Bobeh-Blokhus",
        role:["UX/UI", "Front-end"],
        image:bobeh
    },
    {
        id:3,
        title:"React-todo",
        description:"A fun side project for practicing state and hooks in React, an elaborate todo-application",
        type:"Web-app",
        time_line: 1,
        technology:["Holy-trinity", "React"],
        role:["Front-end"],
        link:"https://react-todo-brutalism.vercel.app/",
        github:"https://github.com/Baranuel/React-Todo-Brutalism",
        image:todo
    },
    {
        id:4,
        title:"Nuxt-movie-database",
        description:"In this project I was using Nuxt framework to fetch the data form an open source movie API. You can search for any movie you think of and also discover new ones through similar recommendation",
        type:"Website",
        time_line: 4,
        technology:["Holy-trinity"],
        role:["UX/UI", "Front-end"],
        link: "https://nuxtjs-chi-one-65.vercel.app/",
        github:"https://github.com/Baranuel/Nuxt-movie-app",
        image:movieDb
    },
    {
        id:5,
        title:"Particle clock",
        description:"With Three-JS I was able to re-create shape resembling a ring purely with particles,  and with vanilla Java-Script I implemented the logic of functioning clock.",
        type:"WebGL",
        time_line: 1,
        technology:["Three-js","Java-Script"],
        role:["Front-end"],
        link: "https://particle-clock.vercel.app/",
        github:"https://github.com/Baranuel/particle-clock",
        image:clock
    },
]

export default projects