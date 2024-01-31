import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl hover:bg-slate-500">
            <p className="text-xl font-bold mb-4"> Title: {project?.title } </p>
            <p className=" mb-4"> <span className='font-bold'>Technologies:</span> {project?.technology } </p>
            <p className="mb-4"><span className='font-bold'>Features:</span> {project?.features } </p>
            <Link to={project?.link} target='_blank' className='font-bold'>Website || </Link>
            <Link to={project?.client} target='_blank' className='font-bold'>Clint Code || </Link>
            <Link to={project?.server} target='_blank' className='font-bold'>Server Code </Link>
        </div>
    );
};

export default Project;