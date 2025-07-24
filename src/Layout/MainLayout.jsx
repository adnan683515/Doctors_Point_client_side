import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#EFFAF7]'>
            <Navber></Navber>
            <div className='sm:min-h-[calc(100vh-440px)] min-h-[50vh]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;