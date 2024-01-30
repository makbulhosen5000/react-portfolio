import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl hover:bg-slate-500">
            <h3 className="text-xl font-bold mb-4"> { project?.title } </h3>
            <h3 className="text-xl font-bold mb-4"> { project?.technology } </h3>
            <h3 className="text-xl font-bold mb-4"> { project?.features } </h3>
            <Link to={project?.link} target='_blank'>Website || </Link>
            <Link to={project?.client} target='_blank'>Clint Code || </Link>
            <Link to={project?.server} target='_blank'>Server Code </Link>
        </div>
    );
};

export default Project;