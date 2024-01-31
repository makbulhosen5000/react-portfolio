import React from 'react';
import profileImage from '../../assets/images/profile.png';
import bannerImg from '../../assets/images/banner3.jpg';
import resume from '../../assets/resume/makbul-resume.pdf';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <>
        <div className="bg-gray-900 text-white">
            <div className="relative flex h-80 overflow-hidden">
                <div className="absolute inset-0 w-full h-80">
                <img className="object-cover w-full h-80" src={bannerImg} alt="Blurred Background"/>
                </div>
                <div className="flex-1 flex items-center justify-between p-8 z-10">
                <div className="text-left text-yellow-200 hover:text-white text-xl text-bold">
                    
                    <p className=' '>{'const Welcome = () =>'}</p>
                    <p className=''>{'{'}</p>
                    <p><span className=' '> {'console.log("Hey ! I am Makbul Hosen,A Passionate Full Stack Developer");'}</span></p>
                    {/* <p><span className=''> {'console.log("A Passionate Full Stack Developer To building web applications");'}</span></p> */}
                    {/* <p>A Passionate Full Stack Developer To building web applications</p> */}
                        
                    <p className=''>{'}'}</p>
                </div>
                <div className="text-start">
                  <Link to={resume}>
                    <button type='download' className='bg-yellow-300 p-2 rounded-lg text-black'>Download Resume</button>
                  </Link>
                </div>
                </div>
            </div>
        </div>


       {/* developer profile */}
        <div className=" my-8 rounded-xl max-w-full mx-auto bg-gray-200 p-8 shadow-xl flex items-center neumorphic-bg "   
        >

            <div className="flex-shrink-0"
             data-aos="fade-up">
                <img src={profileImage} alt="image not found" className="rounded-md w-48 h-48"  />
            </div>

            <div className="ml-4  hover:bg-slate-200"
             data-aos="fade-down"
             data-aos-duration="1000"> 
                <p className="text-gray-600">From the early stages of my career to the present, I have immersed myself in the dynamic world of full-stack development, embracing emerging technologies and methodologies. My journey has equipped me with a versatile skill set, allowing me to navigate both the intricacies of server-side logic and the nuances of front-end design.
                Proficient in a diverse array of languages and frameworks, including [HTML, CSS, BOOTSTRAP, TAILWIND CSS, PHP, JAVASCRIPT, LARAVEL, REACT, LIVEWIRE, ALPINE JS ] I approach each project as an opportunity to showcase not just technical prowess, but an innate understanding of user-centric design and the business goals at hand.</p>
            </div>
        </div>
        </>
    );
};


export default Banner;