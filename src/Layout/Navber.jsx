import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import filUpplust from '../assets/fillPlus.png';
import AuthHook from '../Hooks/AuthHook';
import { PacmanLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const Navber = () => {
    const { user, loading ,handleLogout } = AuthHook();
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate()
    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const closeDropdown = () => setShowDropdown(false);

    const navLinks = (
        <>
            <li><NavLink to="/" className="text-gray-700 font-medium">Home</NavLink></li>
            <li><NavLink to="/findDoctors" className="text-gray-700 font-medium">Find Doctors</NavLink></li>
            <li><NavLink to="/Medicine" className="text-gray-700 font-medium">Oder Medicine</NavLink></li>
            <li><NavLink to="/healthTips" className="text-gray-700 font-medium">Health Tips</NavLink></li>
            <li><NavLink to="/aboutUs" className="text-gray-700 font-medium">About Us</NavLink></li>
            <li><NavLink to="/contactSection" className="text-gray-700 font-medium">Contact</NavLink></li>
            <li><NavLink to="/AddDoctors" className="text-gray-700 font-medium">Add Doctor</NavLink></li>
        </>
    );

    const handleLogoutFuncitn =()=>{

        handleLogout()
        .then(()=>{
            setShowDropdown(false)
            toast.error('Your Are Logged Out!')
            navigate('/login')
            
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    return (
        <div className="bg-[#EFFAF7] sticky top-0 z-[100]">
            <div className="navbar w-[98%] mx-auto">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h12M4 18h10" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[7] p-2 bg-green-50 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex gap-2">
                            <div className="flex w-8 h-8 justify-center items-center">
                                <img className="w-full h-full" src={filUpplust} alt="" />
                            </div>
                            <NavLink to="/" className="text-2xl font-bold text-[#007F5F]">
                                <span className="text-black">Doctors</span>Point
                            </NavLink>
                        </div>
                    </div>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        {navLinks}
                    </ul>
                </div>


                <div className="navbar-end relative">
                    {
                        loading ? <div className='relative overflow-hidden'><PacmanLoader color='#007F5F' /></div> : user ? (
                            <div>
                                <div onClick={toggleDropdown} className="w-12 h-12 rounded-full border-2 border-[#007F5F] overflow-hidden cursor-pointer">
                                    <img
                                        src={user.photoURL || "https://i.ibb.co/1M9Zk6j/default-avatar.png"}
                                        alt="User Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {showDropdown && (
                                    <div className="absolute right-0 mt-2 bg-green-50 shadow-md rounded-md p-3 w-[90%] sm:w-[50%] z-[99]">
                                        <ul className="space-y-2 text-sm text-gray-700 w-full">
                                            <li className="bg-white rounded-full px-2 py-1">
                                                <NavLink
                                                    onClick={closeDropdown}
                                                    to="/dashboard"
                                                    className="w-full block text-center"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>

                                            <li className="bg-white px-2 py-1 rounded-full">
                                                <NavLink
                                                    onClick={closeDropdown}
                                                    to="/profile"
                                                    className="w-full block text-center"
                                                >
                                                    Profile
                                                </NavLink>
                                            </li>

                                            <li className=''>
                                                <button
                                                    className="w-full block bg-rose-600 cursor-pointer text-white px-4 py-2 rounded-full text-center"
                                                    onClick={() => {
                                                        handleLogoutFuncitn();
                                                    }}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                className="rounded-full px-4 py-2 bg-[#007F5F] text-white hover:bg-[#006B4F] transition"
                                to="/login"
                            >
                                Login
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;
