import React from 'react';


const Education = ({education}) => {

    return (
         <div className="bg-white p-6 rounded-lg shadow-2xl hover:bg-slate-500">
         <h3 className="text-xl font-bold mb-4"><span className='font-bold'>Graduation: </span> { education?.title } </h3>
         <h3 className="mb-4"><span className='font-bold'>Duration: </span> { education?.period } </h3>
         <h3 className="mb-4"><span className='font-bold'>Institute: </span>  { education?.university_name } </h3>
         <h3 className="mb-4"><span className='font-bold'>Address: </span>  { education?.university_address } </h3>
        
     </div>
    );
};

export default Education;