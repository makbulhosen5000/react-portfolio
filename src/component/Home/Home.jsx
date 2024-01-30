import React from 'react';
import { Helmet } from 'react-helmet-async';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';
import Contacts from '../../pages/Contact/Contact';
import Banner from '../Banner/Banner';
import Experiences from '../../pages/experiences/Experiences';



const Home = () => {

    return (
        <>
        <Helmet>
            <title> Home | PortFolio</title>
        </Helmet>
       
        <Banner/>
        <Skills/>
        <Projects/>
        <Experiences/>
        <Contacts/>         
        </>
    );
};

export default Home;