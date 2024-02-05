import React, { useEffect, useState } from 'react';
import Experience from '../experiences/Experience';


const Experiences = () => {
    const [experiences,setExperiences] = useState([]);

    useEffect(()=>{
        fetch('experiences.json')
        .then(res=>res.json())
        .then(data=>setExperiences(data));
    })
    
    return (
        <section id="skills" className="bg-gray-200 py-8 mt-8">
        <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold underline py-8">Experiences</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4" data-aos="fade-left">
                   
                {
                    experiences.map((experience)=>(
                        <Experience experience={experience} key={experiences.id} />
                    ))
                }
               
                </div>
            </div>
        </section>
    );
};

export default Experiences;