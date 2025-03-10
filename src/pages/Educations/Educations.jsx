import React, { useEffect, useState } from 'react';
import Education from './Education';
import { Helmet } from 'react-helmet-async';


const Educations = () => {
    const [educations,setEducations] = useState([]);

    useEffect(()=>{
        fetch('educations.json')
        .then(res=>res.json())
        .then(data=>setEducations(data));
    })
    
    return (
        <>
        <Helmet>
            <title> Education | PortFolio</title>
        </Helmet>
        <section  className="bg-gray-200 py-8">
        <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold underline py-8">Education</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
                data-aos="fade-up"
                data-aos-duration="3000"
                >
                   
                {
                    educations.map((education)=>(
                        <Education education={education} key={education.id} />
                    ))
                }
               
                </div>
            </div>
        </section>
        </>
    );
};

export default Educations;