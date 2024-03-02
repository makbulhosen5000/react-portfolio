import React from 'react';
import { FaCode } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

const Skills = () => {
    return (
        <>
        <section  className="bg-gray-200 py-8">
        <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold underline py-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-left">
                <div className="bg-white p-10 rounded-lg shadow-md hover:bg-slate-500">
                    <div className="flex justify-center items-center h-24 w-24 bg-yellow-300 rounded-full mx-auto">
                    <p><FaCode size={50} /></p>
                    </div>
                    <h3 className="flex justify-center items-center text-xl font-bold mb-4 mx-auto">LANGUAGES</h3>
                    <ul className="list-disc">
                        <li>JAVA, PHP, PYTHON, SQL, JAVASCRIPT</li>
                        <li>HTML, CSS</li>
                    </ul>
                </div>
                <div className="bg-white p-10 rounded-lg shadow-md hover:bg-slate-500">
                <div className="flex justify-center items-center h-24 w-24 bg-yellow-300 rounded-full mx-auto">
                   <p><FaCodepen size={50} /></p>
                    </div>
                    <h3 className="flex justify-center items-center text-xl font-bold mb-4 mx-auto">FRAMEWORKS</h3>
                    <ul className="list-disc">
                        <li> TAILWIND, ALPINE, LARAVEL, LIVEWIRE</li>
                        <li> REACT, NODE, EXPRESS</li>
                    </ul>
                </div>
                <div className="bg-white p-10 rounded-lg shadow-md hover:bg-slate-500">
                <div className="flex justify-center items-center h-24 w-24 bg-yellow-300 rounded-full mx-auto">
                    <p><FaDatabase size={50}  /></p>
                    </div>
                    <h3 className="flex justify-center items-center text-xl font-bold mb-4 mx-auto">DATABASE & API</h3>
                    <ul className="list-disc">
                        <li>MySQL, SQLITE, MongoDB</li>
                        <li>RESTful APIs</li>
                    </ul>
                </div>
                <div className="bg-white p-10 rounded-lg shadow-md hover:bg-slate-500">
                <div className="flex justify-center items-center h-24 w-24 bg-yellow-300 rounded-full mx-auto">
                     <p><FaTools size={50} /></p>
                    </div>
                    <h3 className="flex justify-center items-center text-xl font-bold mb-4 mx-auto">OS & TOOLS</h3>
                    <ul className="list-disc">
                        <li>WINDOWS, LINUX</li>
                        <li>GIT & GITHUB, POSTMAN, VS CODE</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
         </>
    );
};

export default Skills;