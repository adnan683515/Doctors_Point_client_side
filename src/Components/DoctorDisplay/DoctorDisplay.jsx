import React from 'react';
import { Link } from 'react-router';

const DoctorDisplay = ({ doctor }) => {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date().getDay();
    const dayName = days[today];

    return (
        <div className='flex justify-between mb-4 flex-wrap gap-4 p-4 rounded-xl shadow-sm'>


            <div className='w-full sm:w-[60%] flex gap-4 items-start'>


                <div className='w-[100px] h-auto flex flex-col items-center gap-1'>
                    <img
                        className='w-[100px] h-[100px] object-cover rounded-md '
                        src={doctor?.image}
                        alt={doctor?.name}
                    />

                    <div className='text-[11px] text-white bg-blue-600 px-2 py-[2px] rounded-full shadow'>
                        ✅ Certified
                    </div>

                    <span className='text-[11px] text-gray-500'>
                        {doctor?.experience} years experience
                    </span>
                </div>


                <div className='flex-1 space-y-1'>
                    <h2 className='text-lg font-bold text-[#007F5F]'>{doctor?.name}</h2>
                    <p className='text-sm text-gray-700'>{doctor?.designation}</p>

                    <span className=' text-white px-3 py-1 rounded-l-full rounded-r-full bg-[#007F5F]'>{doctor?.department}</span>



                    <p className='text-[13px] text-gray-600'>
                        <strong>BMDC:</strong> {doctor?.bmdcNumber}
                    </p>
                    <p className='text-[13px] text-gray-600'>
                        <strong>Phone:</strong> {doctor?.phone}
                    </p>

                    <Link
                        onClick={() => handleDetailShow(doctor)}
                        className='text-sm cursor-pointer text-blue-500 hover:underline flex items-center gap-1'
                    >
                        View Details
                        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>


            <div className='hidden sm:block border-r border-dotted'></div>


            <div className='w-full sm:w-[30%] relative flex flex-col justify-between'>


                <div
                    className={`absolute top-0 rounded-l-full -right-4 px-3 py-1  text-xs font-semibold text-white ${doctor?.visitDays.includes(dayName)
                        ? 'bg-[#007F5F]'
                        : 'bg-rose-500'
                        }`}
                >
                    {doctor?.visitDays.includes(dayName) ? "On Duty" : "Off Day"}
                </div>

                <div className='space-y-2 mt-6 sm:mt-7'>

                    <p className='text-sm'><strong>Chamber:</strong> {doctor?.chamber}</p>
                    <p className='text-sm'><strong>Fee:</strong> ৳{doctor?.fee}</p>


                    <p className='text-sm border border-[#007F5F] rounded-md px-2 py-1 text-gray-700'>
                        <strong>Specialty :</strong> {doctor?.specialty}
                    </p>


                    <p className='text-[13px] text-blue-600'>
                        <strong>Education:</strong> {doctor?.degree}, {doctor?.medicalCollege}
                    </p>
                </div>
            </div>
        </div>




    );
};

export default DoctorDisplay;