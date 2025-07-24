import React from 'react';
import { NavLink } from 'react-router';
import filUpplust from '../assets/fillPlus.png'
import AuthHook from '../Hooks/AuthHook';

const Navber = () => {

    const {info} = AuthHook()

    console.log(info)

    const navLinks = (
        <>
            <li><NavLink to="/" className="text-gray-700 font-medium">Home</NavLink></li>
            <li><NavLink to="/doctors" className="text-gray-700 font-medium">Find Doctors</NavLink></li>
            <li><NavLink to="/departments" className="text-gray-700 font-medium">Departments</NavLink></li>

            <li><NavLink to="/blogs" className="text-gray-700 font-medium">Health Tips</NavLink></li>
            <li><NavLink to="/about" className="text-gray-700 font-medium">About Us</NavLink></li>
            <li><NavLink to="/contact" className="text-gray-700 font-medium">Contact</NavLink></li>
        </>
    );


    return (
        <div className="bg-[#EFFAF7] sticky top-0 z-100">
            <div className="navbar  w-[98%] mx-auto ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className=" lg:hidden">
                            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h12M4 18h10" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[7] p-2 bg-green-50   rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <div className='hidden md:block'>
                        <div className='flex gap-2  '>
                            <div className='flex  w-8 bg-[#EFFAF7] h-8 justify-center items-center'>
                                <img className='w-full h-full' src={filUpplust} alt="" />
                            </div>
                            <NavLink to="/" className="text-2xl font-bold text-[#007F5F]"> <span className='text-black'>Doctors</span>Point</NavLink>
                        </div>
                    </div>

                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        {navLinks}
                    </ul>
                </div>


                <div className="navbar-end">
                    <NavLink to="/login" className="px-6 py-2 rounded-l-full rounded-r-full bg-[#007F5F]   text-white  transition font-semibold">
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navber;
