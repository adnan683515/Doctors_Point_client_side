import React from 'react';
import Navber from './Navber';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Share/Loader';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div className="bg-[#EFFAF7] sm:max-w-[1600px] mx-auto">
            <Navber />

            {navigation.state === 'loading' && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 z-[9999]">
                    <Loader></Loader>
                </div>
            )}

            <div className="sm:min-h-[calc(100vh-440px)] min-h-[50vh]">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;
