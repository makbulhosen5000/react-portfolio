import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ChatBox from '../Messenger/ChatBox';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='mx-4'>
            <Navbar/>
            <Outlet/>
            <ChatBox/>
            <Footer/>
        </div>
    );
};

export default Main;