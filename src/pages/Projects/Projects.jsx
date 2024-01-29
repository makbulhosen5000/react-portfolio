import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';

const Projects = () => {
    const [projects,setProjects] = useState([]);

    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data));
    })
    
    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-right">
                   
                {
                    projects.map((project)=>(
                        <Project project={project} key={project.id} />
                    ))
                }
               
                </div>
            </div>
        </section>
    );
};

export default Projects;