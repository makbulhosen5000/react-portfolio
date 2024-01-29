import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='mx-4'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;