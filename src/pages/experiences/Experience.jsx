import React from 'react';
import { Link } from 'react-router-dom';

const Experience = ({experience}) => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl hover:bg-slate-500">
            <h3 className="text-xl font-bold mb-4"> { experience?.title } </h3>
            <h3 className="text-xl font-bold mb-4"> { experience?.period } </h3>
            <h3 className="text-xl font-bold mb-4"> { experience?.company_name } </h3>
            <h3 className="text-xl font-bold mb-4"> { experience?.company_address } </h3>
            <h3 className="text-xl font-bold mb-4"> { experience?.job_type } </h3>
            <Link to={experience?.website} target='_blank'>Website</Link>
           
        </div>
    );
};

export default Experience;