import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { GoHome } from "react-icons/go";
import { Link } from 'react-router';
import { CiUser } from "react-icons/ci";
import { FaUserMd, FaCalendarCheck, FaPills, FaUserPlus, FaPlusSquare } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdHelpCenter } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

const Deshboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);



    return (
        <div className="min-h-screen flex bg-[#F2F9FF]">

            <div
                className={clsx(
                    'bg-[#FFFFFF] text-black w-64 space-y-6 px-4 py-6 absolute md:relative  inset-y-0 left-0 transform md:translate-x-0  transition-transform duration-200 ease-in-out z-50',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                )}
            >
                <Link to={'/'}>
                    <h2 className="text-xl font-bold mb-6">Doctors Point</h2>
                </Link>

                <div className=''>
                    <div className='flex gap-2 bg-green-100 py-2 px-2'>
                        <div className='flex justify-center items-center'> <GoHome size={20}></GoHome> </div>
                        <div className='flex  font-semibold text-green-700 justify-center items-center'> <h1>Deshboard</h1> </div>
                    </div>
                    <div className='flex gap-2 text-gray-600  py-2 px-2  rounded-md cursor-pointer'>
                        <div className='flex justify-center items-center'>
                            <FaUserMd size={20} className='' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1>Doctors</h1>
                        </div>
                    </div>


                    <div className='flex gap-2 py-2 text-gray-600 px-2 rounded-md cursor-pointer'>
                        <div className='flex justify-center items-center'>
                            <FaCalendarCheck size={20} className='' />
                        </div>
                        <div className='flex  justify-center items-center'>
                            <h1>Appointment</h1>
                        </div>
                    </div>


                    <div className='flex gap-2 text-gray-600 py-2 px-2 rounded-md cursor-pointer'>
                        <div className='flex justify-center items-center'>
                            <FaPills size={20} className='' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1>Medicine</h1>
                        </div>
                    </div>


                    <div className='flex gap-2 text-gray-600 py-2 px-2 rounded-md cursor-pointer'>
                        <div className='flex justify-center items-center'>
                            <FaUserPlus size={20} className='' />
                        </div>
                        <div className='flex ustify-center items-center'>
                            <h1>Add Doctor</h1>
                        </div>
                    </div>


                    <div className='flex gap-2 text-gray-600 py-2 px-2  rounded-md cursor-pointer'>
                        <div className='flex justify-center items-center'>
                            <FaPlusSquare size={20} className='' />
                        </div>
                        <div className='flex  justify-center items-center'>
                            <h1>Add Medicine</h1>
                        </div>
                    </div>


                </div>

                <div className="absolute bottom-8 text-gray-600 left-4 flex items-center gap-2 cursor-pointer">
                    <MdHelpCenter size={20}></MdHelpCenter>
                    <span>Help Center</span>
                </div>

                <div className="absolute text-gray-600 bottom-4 left-4 flex items-center gap-2 cursor-pointer">
                    <FiLogOut size={20} />
                    <span>Logout</span>
                </div>

            </div>


            <div className="flex-1 flex  flex-col w-full">

                <div className="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                <div className="sm:p-6 p-2">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                
                        <div className="border p-4 border-gray-300 rounded-lg bg-white">
                            <div className="flex gap-2 items-center">
                                <FaUserInjured className="text-green-500 text-lg" />
                                <h1 className="text-sm font-semibold">Total Patient</h1>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="sm:text-3xl text-xl  font-semibold">120</div>
                                <span className="flex items-center gap-1 bg-green-100 text-black px-2 py-1 rounded-full text-xs">
                                    <MdTrendingUp className="text-green-600" /> +12%
                                </span>
                            </div>
                            <h1 className="text-gray-400 text-xs mt-1">Compared to last week</h1>
                        </div>


                        <div className="border p-4 border-gray-300 rounded-lg bg-white">
                            <div className="flex gap-2 items-center">
                                <FaUserMd className="text-blue-500 text-lg" />
                                <h1 className="text-sm font-semibold">Total Doctor</h1>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="sm:text-3xl text-xl font-semibold">45</div>
                                <span className="flex items-center gap-1 bg-blue-100 text-black px-2 py-1 rounded-full text-xs">
                                    <MdTrendingUp className="text-blue-600" /> +5%
                                </span>
                            </div>
                            <h1 className="text-gray-400 text-xs mt-1">Compared to last month</h1>
                        </div>


                        <div className="border p-4 border-gray-300 rounded-lg bg-white">
                            <div className="flex gap-2 items-center">
                                <FaCalendarCheck className="text-amber-500 text-lg" />
                                <h1 className="text-sm font-semibold">Total Appointment</h1>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="sm:text-3xl text-xl  font-semibold">210</div>
                                <span className="flex items-center gap-1 bg-amber-100 text-black px-2 py-1 rounded-full text-xs">
                                    <MdTrendingDown className="text-red-500" /> -8%
                                </span>
                            </div>
                            <h1 className="text-gray-400 text-xs mt-1">From previous period</h1>
                        </div>


                        <div className="border p-4 border-gray-300 rounded-lg bg-white">
                            <div className="flex gap-2 items-center">
                                <FaPills className="text-emerald-500 text-lg" />
                                <h1 className="text-sm font-semibold">Total Medicine</h1>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="sm:text-3xl text-xl font-semibold">380</div>
                                <span className="flex items-center gap-1 bg-emerald-200 text-black px-2 py-1 rounded-full text-xs">
                                    <MdTrendingUp className="text-green-600" /> +20%
                                </span>
                            </div>
                            <h1 className="text-gray-400 text-xs mt-1">Updated stock levels</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Deshboard;
