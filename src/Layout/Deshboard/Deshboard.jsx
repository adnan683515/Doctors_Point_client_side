import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { GoHome } from "react-icons/go";
import { Link } from 'react-router';
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

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';
import DisplayAppointmentDesh from './DisplayAppointmentDesh';
import DeshBoardLayout from './DeshBoardLayout';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: blue[500],
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));





const Deshboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const axiosurl = useAxiosSecure()


    const { data: allValue = {}, isLoading: ValueLoadng } = useQuery({
        queryKey: 'all-length',
        queryFn: (async () => {
            const result = await axiosurl.get('/allValuesCollectionsDeshboard')
            return result?.data
        })
    })
    const { data: recentDoctor = [], isLoading } = useQuery({
        queryKey: 'somedoctors',
        queryFn: (async () => {
            const result = await axiosurl.get('/adminForDoctorRecent')
            return result?.data
        })
    })
    const { data: someAppoinemnts = [], isLoading: appoinemtnLoading } = useQuery({
        queryKey: 'someapp',
        queryFn: (async () => {
            const result = await axiosurl.get('/someAppointments')
            return result?.data
        })
    })



    if (isLoading || ValueLoadng || appoinemtnLoading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ProgressLoaindg></ProgressLoaindg>
        </div>
    }

    return (
        <div className="min-h-screen bg-[#F2F9FF] flex sm:justify-between sm:flex-row flex-col gap-2">




            <DeshBoardLayout></DeshBoardLayout>


            <div className=' w-[100%]  '>
                <div className="  flex  flex-col  ">



                    <div className='sm:p-6 p-2 space-y-3.5 sm:space-y-5'>
                        <div className=" ">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">

                                <div className=" p-4  rounded-lg bg-white">
                                    <div className="flex gap-2 items-center">
                                        <FaUserInjured className="text-green-500 text-lg" />
                                        <h1 className="text-sm font-semibold">Total Patient</h1>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="sm:text-3xl text-xl  font-semibold"> {allValue?.patient} </div>
                                        <span className="flex items-center gap-1 bg-green-100 text-black px-2 py-1 rounded-full text-xs">
                                            <MdTrendingUp className="text-green-600" /> +12%
                                        </span>
                                    </div>
                                    <h1 className="text-gray-400 text-xs mt-1">Compared to last week</h1>
                                </div>


                                <div className=" p-4 rounded-lg bg-white">
                                    <div className="flex gap-2 items-center">
                                        <FaUserMd className="text-blue-500 text-lg" />
                                        <h1 className="text-sm font-semibold">Total Doctor</h1>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="sm:text-3xl text-xl font-semibold"> {allValue?.doctor} </div>
                                        <span className="flex items-center gap-1 bg-blue-100 text-black px-2 py-1 rounded-full text-xs">
                                            <MdTrendingUp className="text-blue-600" /> +5%
                                        </span>
                                    </div>
                                    <h1 className="text-gray-400 text-xs mt-1">Compared to last month</h1>
                                </div>


                                <div className=" p-4  rounded-lg bg-white">
                                    <div className="flex gap-2 items-center">
                                        <FaCalendarCheck className="text-amber-500 text-lg" />
                                        <h1 className="text-sm font-semibold">Total Appointment</h1>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="sm:text-3xl text-xl  font-semibold">  {allValue?.appointment} </div>
                                        <span className="flex items-center gap-1 bg-amber-100 text-black px-2 py-1 rounded-full text-xs">
                                            <MdTrendingDown className="text-red-500" /> -8%
                                        </span>
                                    </div>
                                    <h1 className="text-gray-400 text-xs mt-1">From previous period</h1>
                                </div>


                                <div className=" p-4 rounded-lg bg-white">
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
                <div className=' sm:w-[95%] flex justify-between sm:flex-row flex-col mx-auto'>
                    <div className='sm:w-[70%]'>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell >Patient Name</StyledTableCell>

                                        <StyledTableCell align="center">Date & Time</StyledTableCell>
                                        <StyledTableCell align="right"> Status </StyledTableCell>
                                        <StyledTableCell align="right">Appointment for</StyledTableCell>

                                        <StyledTableCell align="right">Actions</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {someAppoinemnts.map((row, index) => <DisplayAppointmentDesh row={row} index={index}></DisplayAppointmentDesh>)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <div className='w-[30%]'>
                        adfasdfsadf
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
                        {recentDoctor?.length ? recentDoctor.map((item) => {


                            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                            const today = new Date().getDay();
                            const dayName = days[today];
                            const ckDay = item?.visitDays.includes(dayName)

                            return <div
                                key={item?._id}
                                className="flex items-center justify-between  rounded-lg p-2 mb-2 bg-green-50  transition-all duration-200"
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
                                        <h1 className="text-[11px] font-semibold text-gray-800">{item?.name}</h1>
                                        <p className="text-xs text-gray-500">{item?.department}</p>


                                    </div>
                                </div>


                                <div className="text-right">

                                    <span className={`inline-block  ${ckDay ? 'text-white bg-green-500' : 'text-white  bg-red-500'} text-[8px] px-2 py-0.5 rounded-full font-medium mb-1`}>
                                        {
                                            ckDay ? 'Available' : 'Not Available'
                                        }
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
                        }) : (
                            <p className="text-center text-gray-500 text-sm">Doctor nai</p>
                        )}


                    </div>

                </div>

                <div className='mt-5'>
                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center'>
                            <h1 className='mb-3 text-[12px] font-semibold'>Recent Added Medicin</h1>
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
