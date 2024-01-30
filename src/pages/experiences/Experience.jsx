import React from 'react';
import { Link } from 'react-router-dom';

const Experience = ({experience}) => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl hover:bg-slate-500">
            <h3 className="text-xl font-bold mb-4"> { experience?.title } </h3>
            <h3 className="text-xl font-bold mb-4"> { experience?.technology } </h3>
            <h3 className="text-xl font-bold mb-4"> { experience?.features } </h3>
            <Link to={experience?.link} target='_blank'>Website || </Link>
            <Link to={experience?.client} target='_blank'>Clint Code || </Link>
            <Link to={experience?.server} target='_blank'>Server Code </Link>
        </div>
    );
};

export default Experience;