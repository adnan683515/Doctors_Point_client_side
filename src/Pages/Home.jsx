import React from 'react';
import Hero from '../Components/Hero/Hero';
import OurServices from '../Components/Ourservices/OurServices';
import About from '../Components/About/About';
import AppointMentPDF from './AppointMentPDF';







const Home = () => {
    return (
        <div>
            <Hero></Hero>

            <div className='pb-10'>  <OurServices></OurServices></div>

            <div className='py-10'>
                <About></About>
            </div>



            <AppointMentPDF></AppointMentPDF>

        </div>
    );
};

export default Home;