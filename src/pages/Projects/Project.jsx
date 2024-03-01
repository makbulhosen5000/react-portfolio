import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {

    return (
            <div className="text-green-50 bg-cover object-cover bg-center bg-no-repeat p-6 rounded-lg shadow-2xl" style={{ backgroundImage: "url('src/assets/images/projects/p1.jpg')" }}>
                <p className="text-xl font-bold mb-4"> Title: {project?.title} </p>
                <p className="mb-4"> <span className='font-bold'>Technologies:</span> {project?.technology} </p>
                <p className="mb-4"> <span className='font-bold'>Features:</span> {project?.features} </p>
                <Link to={project?.link} target='_blank' className='font-bold'>Preview || </Link>
                <Link to={project?.client} target='_blank' className='font-bold'>Client Code || </Link>
                <Link to={project?.server} target='_blank' className='font-bold'>Server Code </Link>
            </div>
        
    );
};

export default Project;