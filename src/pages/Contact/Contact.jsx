import React from 'react';
import Lottie from 'lottie-react';
import developer1 from '../../assets/json/programming-1.json';

const Contact = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                
      <div className=''>
           <Lottie animationData={developer1} />     
      </div> 
        <div className="mx-auto my-8 p-8 bg-gradient-to-r from-slate-950 to-slate-950  shadow-md rounded-md max-w-2xl" data-aos="flip-left">
            <h2 className='text-3xl font-bold text-yellow-300 mb-6'>Have a project in mind or just want to say hi ? Feel free to get in touch me!</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-white">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500 text-gray-800" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500 text-gray-800" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-white">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500 text-gray-800"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-yellow-300 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition duration-300 ease-in-out">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Contact;