import React, { useState } from 'react';
import AuthHook from '../Hooks/AuthHook';
import ProgressLoaindg from '../Share/ProgressLoaindg';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/AxiosSequre';
import MyAppointmentTable from '../Components/AppointmentList/MyAppointment/MyAppointmentTable';
import BubbleChart from '../Components/AppointmentList/MyAppointment/BubbleChart';
import Tooltip from '@mui/material/Tooltip';


import { FaClock, FaCheckCircle, FaSpinner, FaTimesCircle } from 'react-icons/fa';


const statuses = ['pending', 'Confirmed', 'Ongoing', 'Completed', 'Cancelled'];

const colors = {
    pending: '#FFA500',
    Confirmed: '#00C49F',
    Ongoing: '#0088FE',
    Completed: '#4CAF50',
    Cancelled: '#FF4444'
};

const icons = {
    pending: <FaClock size={16} />,
    Confirmed: <FaCheckCircle size={16} />,
    Ongoing: <FaSpinner size={16} className="animate-spin" />,
    Cancelled: <FaTimesCircle size={16} />
};

const statusDescriptions = {
    pending: 'appointment request করা হয়েছে কিন্তু confirm হয়নি',
    Confirmed: 'ডাক্তার অ্যাপয়েন্টমেন্ট গ্রহণ করেছেন',
    Ongoing: 'রোগী এখন ডাক্তার এর সাথে consult করছে',
    Completed: 'ডাক্তার দেখানো শেষ, appointment সফলভাবে সম্পন্ন হয়েছে',
    Cancelled: 'Appointment cancel হয়ে গেছে',
};

const MyAppointments = () => {

    const { user, loading } = AuthHook()
    const axiosSequre = useAxiosSecure()
    const [totalAppointmentStatus, setTotalAppStatus] = useState([])
    const [activeValue, setActiveValue] = useState(null);


    const { data: myappoinmentList = [], isLoading } = useQuery({
        queryKey: ['myappoinment', user?.email],
        enabled: !!user && !loading,
        queryFn: (async () => {
            const result = await axiosSequre.get(`/myappointments/${user?.email}`)
            setTotalAppStatus(result?.data?.counts)
            return result?.data?.result
        })
    })



    if (!user || loading || isLoading) {
        return <div className='min-h-screen flex justify-center items-center'>
            <ProgressLoaindg></ProgressLoaindg>
        </div>
    }

    return (
        <div className="flex flex-col p-2 sm:p-0 sm:flex-row justify-between sm:w-[90%] mx-auto gap-4">



            <div className="sm:w-[50%] md:w-[60%] w-full ">

                <h2 className="text-[12px] sm:text-base font-semibold mb-2">
                    Appointment List
                </h2>

                <div className="flex flex-row mb-7 flex-wrap gap-2 justify-center sm:justify-start">
                    {statuses.map((status) => {
                        const isActive = status === activeValue;
                        const bgColor = isActive ? colors[status] : 'white';
                        const borderColor = colors[status];


                        return (
                            <Tooltip title={`${statusDescriptions[status]}`} arrow>
                                <button
                                    key={status}
                                    onClick={() => setActiveValue(status)}
                                    className={`
          rounded-l-full rounded-r-full
          cursor-pointer
          text-[10px] sm:text-base
          transition-colors duration-200
          flex items-center gap-2
        `}
                                    style={{
                                        minWidth: '70px',
                                        padding: '4px 10px',
                                        backgroundColor: bgColor,
                                        color: isActive ? 'white' : undefined,
                                        border: `2px solid ${borderColor}`,
                                        flexGrow: 1,
                                    }}
                                >
                                    {icons[status]}
                                    <span>{status}</span>
                                </button>
                            </Tooltip>
                        );
                    })}
                </div>

                <MyAppointmentTable data={myappoinmentList} />
            </div>


            <div className="sm:w-[40%] w-full  flex justify-center items-center rounded-lg p-2">
                <div className="w-full">
                    <h2 className="text-[12px] sm:text-base font-semibold text-center mb-3">
                        Appointment Status
                    </h2>
                    <div className=''>
                        <BubbleChart totalAppointmentStatus={totalAppointmentStatus} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyAppointments;