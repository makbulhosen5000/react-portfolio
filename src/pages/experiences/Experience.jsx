import React from 'react';
import { Link } from 'react-router-dom';

const Experience = ({experience}) => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl hover:bg-slate-500">
            <h3 className="text-xl font-bold mb-4"><span className='font-bold'>Title: </span> { experience?.title } </h3>
            <h3 className="mb-4"><span className='font-bold'>Duration: </span> { experience?.period } </h3>
            <h3 className="mb-4"><span className='font-bold'>Company: </span>  { experience?.company_name } </h3>
            <h3 className="mb-4"><span className='font-bold'>Address: </span>  { experience?.company_address } </h3>
            <h3 className=" mb-4"><span className='font-bold'>Job Type: </span>  { experience?.job_type } </h3>
            <h3 className=" mb-4"><span className='font-bold'>Website: </span>  <Link to={experience?.website} target='_blank'>{experience?.website}</Link> </h3>
            
           
        </div>
    );
};

export default Experience;