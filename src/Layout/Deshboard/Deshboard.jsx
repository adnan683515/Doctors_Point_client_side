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
import AppointmentChart from './AppointmentChart';
import MedicinChart from './MedicinChart';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/AxiosSequre';
import ProgressLoaindg from '../../Share/ProgressLoaindg';

const Deshboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const axiosurl = useAxiosSecure()
    const { data: recentDoctor = [], isLoading } = useQuery({
        queryKey: 'somedoctors',
        queryFn: (async () => {
            const result = await axiosurl.get('/adminForDoctorRecent')
            return result?.data
        })
    })

    if (isLoading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ProgressLoaindg></ProgressLoaindg>
        </div>
    }

    return (
        <div className="min-h-screen bg-[#F2F9FF] flex sm:justify-between sm:flex-row flex-col gap-2">

            <div
                className={clsx(
                    'bg-[#FFFFFF] text-black   w-64 space-y-6 px-4 py-6 absolute md:relative  inset-y-0 left-0 transform md:translate-x-0  transition-transform duration-200 ease-in-out z-50',
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
                    <Link to={'/AddDoctors'}>
                        <div className='flex gap-2 text-gray-600 py-2 px-2 rounded-md cursor-pointer'>
                            <div className='flex justify-center items-center'>
                                <FaUserPlus size={20} className='' />
                            </div>
                            <div className='flex ustify-center items-center'>
                                <h1>Add Doctor</h1>
                            </div>
                        </div></Link>




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


            <div className=" w-[100%]    flex  flex-col  ">

                <div className="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                <div className='sm:p-6 p-2 space-y-3.5 sm:space-y-5'>
                    <div className=" ">
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


                    <div className='flex sm:flex-row gap-5 flex-col justify-between '>
                        <div className='sm:w-[50%] '>
                            <AppointmentChart></AppointmentChart>
                        </div>
                        <div className='sm:w-[50%]'>
                            <MedicinChart></MedicinChart>
                        </div>
                    </div>
                </div>
            </div>


            <div className='sm:w-[25%] w-full mt-6 mr-2 bg-white  rounded-lg px-3 py-1'>

                <div>
                    <div className='flex justify-between my-2'>
                        <h1 className='mb-3 text-[12px] font-semibold'>Recent Docotor's</h1>
                        <div className='flex justify-center items-center'>
                            <div className='flex bg-blue-100 rounded-l-full rounded-r-full px-3 py-1 cursor-pointer'>
                                <div className='flex justify-center items-center'>
                                    <h1 className='text-[10px]'>show more</h1>
                                </div>
                                <div>
                                    <button className="bg-white rounded-full p-1  hover:bg-gray-100 transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {recentDoctor?.length ? recentDoctor.map((item) => (
                            <div
                                key={item?._id}
                                className="flex items-center justify-between border border-gray-200 rounded-lg p-2 mb-2 bg-white  transition-all duration-200"
                            >

                                <div className="flex items-center gap-3">

                                    <div className="w-12 h-12 flex-shrink-0">
                                        <img
                                            className="w-full h-full object-cover rounded-full border border-gray-300"
                                            src={item?.image}
                                            alt={item?.name || "Doctor"}
                                        />
                                    </div>

                                    <div>
                                        <h1 className="text-sm font-semibold text-gray-800">{item?.name}</h1>
                                        <p className="text-xs text-gray-500">{item?.department}</p>


                                    </div>
                                </div>


                                <div className="text-right">

                                    <span className="inline-block bg-green-100 text-green-700 text-[10px] px-1 py-0.5 rounded-full font-medium mb-1">
                                        {item?.designation}
                                    </span>


                                    <Link to={`/doctorDetails/${item?._id}`}>
                                        <div className="flex cursor-pointer items-center gap-1">
                                            <p className="text-xs text-gray-600">
                                                View
                                            </p>
                                            <button className="bg-white rounded-full p-1 shadow hover:bg-gray-100 transition">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-3 h-3 text-gray-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>

                                    </Link>

                                </div>
                            </div>
                        )) : (
                            <p className="text-center text-gray-500 text-sm">Doctor nai</p>
                        )}


                    </div>

                </div>

                <div className='mt-5'>
                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center'>
                            <h1 className='mb-3 text-[12px] font-semibold'>Recent Appoinment's</h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='flex bg-blue-100 rounded-l-full rounded-r-full px-3 py-1 cursor-pointer'>
                                <div className='flex justify-center items-center'>
                                    <h1 className='text-[12px]'>show more</h1>
                                </div>
                                <div>
                                    <button className="bg-white rounded-full p-1  hover:bg-gray-100 transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Deshboard;
