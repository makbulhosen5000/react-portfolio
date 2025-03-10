import React, { useEffect, useState } from 'react';
import Experience from '../experiences/Experience';
import { Helmet } from 'react-helmet-async';


const Experiences = () => {
    const [experiences,setExperiences] = useState([]);

    useEffect(()=>{
        fetch('experiences.json')
        .then(res=>res.json())
        .then(data=>setExperiences(data));
    })
    
    return (
        <>
        <Helmet>
            <title> Experience | PortFolio</title>
        </Helmet>
                <section  className="bg-gray-200 py-8">
        <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold underline py-8">Experiences</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
                 data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
                >
                   
                {
                    experiences.map((experience)=>(
                        <Experience experience={experience} key={experiences.id} />
                    ))
                }
               
                </div>
            </div>
        </section>
        </>
       
    );
};

export default Experiences;