import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FcBusinessman, FcInfo } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import useAxiosSecure from '../../Hooks/AxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ProgressLoaindg from '../../Share/ProgressLoaindg';
import DisplayAppointmentList from '../AppointmentList/DisplayAppointmentList';


const convertTo12Hour = (timeStr) => {
    if (!timeStr) return 'Not specified';

    const [hour, minute] = timeStr.split(':');
    const hr = parseInt(hour);
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const formattedHour = hr % 12 === 0 ? 12 : hr % 12;

    return `${formattedHour}:${minute} ${ampm}`;
};

export const Information = ({ doctorDetails }) => {
    const [defaultDay, setDefaultDay] = useState(doctorDetails?.visitDays[0])



    // const today = new Date();
    // const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // const dayName = days[today.getDay()];


    const axiosHook = useAxiosSecure()
    const { data: doctorWiseAppointment = [] } = useQuery({
        queryKey: ['doctorsAppointment', doctorDetails?._id, defaultDay],
        queryFn: (async () => {
            const result = await axiosHook.get(`/todaysAppointment/${defaultDay}/${doctorDetails?._id}`)
            return result?.data
        })
    })




    return (<Tabs className="border-none">
        <TabList className="flex flex-wrap cursor-pointer gap-1 border-none">
            <Tab className="px-2 py-1 flex items-center gap-1 text-sm text-gray-600 hover:text-[#007F5F] focus:outline-none">
                <FcInfo size={24} />
                <span className="text-base">Info</span>
            </Tab>

            <Tab className="px-2 py-1 flex items-center gap-1 text-sm text-gray-600 hover:text-[#007F5F] focus:outline-none">
                <FcIdea size={24} />
                <span className="text-base">Reviews</span>
            </Tab>

            <Tab className="px-2 py-1 flex items-center gap-1 text-sm text-gray-600 hover:text-[#007F5F] focus:outline-none">
                <FcGraduationCap size={24} />
                <span className="text-base">Certificate</span>
            </Tab>

            <Tab className="px-2 py-1 flex items-center gap-1 text-sm text-gray-600 hover:text-[#007F5F] focus:outline-none">
                <FcBusinessman size={24} />
                <span className="text-base">Appointments</span>
            </Tab>
        </TabList>


        <TabPanel className="border-none mt-4">
            <div className=" rounded-xl p-6 ">

                <h1 className="text-blue-600 text-2xl font-bold text-center sm:text-left mb-6">
                    Doctor Overview & Weekly Schedule
                </h1>


                <div className="flex flex-col sm:flex-row justify-between gap-8">


                    <div className="sm:w-[50%]">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">About the Doctor</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {doctorDetails?.additionalInfo || "No additional information provided."}
                        </p>
                    </div>


                    <div className="sm:w-[50%]">
                        <h2 className="text-lg font-bold text-blue-500 mb-1">Weekly Schedule</h2>

                        <div>
                            <span>Chamber Name: {doctorDetails?.chamber} </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                            These are the available days and chamber times for appointments.
                        </p>


                        <div className="flex flex-wrap gap-3 mb-4">
                            {doctorDetails?.visitDays?.map((day, index) => (
                                <button

                                    key={index}
                                    className={`

                                        bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-medium transition-all duration-300
                                        `}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>



                        <div className="space-y-1 text-sm text-gray-700">
                            <p>
                                <span className="font-semibold">Start Time:</span>{' '}
                                {
                                    convertTo12Hour(doctorDetails?.startTime)
                                }
                            </p>
                            <p>
                                <span className="font-semibold">End Time:</span>{' '}
                                {convertTo12Hour(doctorDetails?.endTime) || 'Not specified'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </TabPanel>
        <TabPanel className="border-none mt-4">
            <h2>Any content 2</h2>
        </TabPanel>

        <TabPanel className="border-none mt-4">
            <div className=" p-4 rounded-lg  space-y-4">
                <h1 className="text-blue-700 text-2xl font-semibold border-b pb-2">Doctor's Certificate</h1>

                <p className="text-gray-700 text-sm">
                    This certificate verifies the professional qualification of the doctor. It has been issued by a recognized medical authority and confirms the successful completion of the required education and training in the respective field.
                </p>

                <div className="flex justify-center items-center">
                    <img
                        src={doctorDetails?.certificate}
                        alt="Doctor Certificate"
                        className="w-full max-w-lg rounded-md shadow-sm "
                    />
                </div>

                <p className="text-gray-600 text-sm text-center italic">
                    *For verification or further details, feel free to contact the clinic directly.
                </p>
            </div>

        </TabPanel>
        <TabPanel className="border-none mt-4">
            <div className='= sm:w-[50%] space-y-3'>

                <div className='flex gap-4'>
                    {
                        doctorDetails?.visitDays?.map((item, index) => {

                            return <button
                                onClick={() => setDefaultDay(item)}
                                key={index}
                                className={`px-7 cursor-pointer py-1 rounded-l-full rounded-r-full border-2
    ${index % 2 === 0
                                        ? 'border-blue-600'
                                        : 'border-green-700'}
    ${defaultDay === item
                                        ? 'bg-blue-500 text-white'
                                        : ''}`}
                            >
                                {item}
                            </button>
                        })
                    }
                </div>
                <div>
                    {
                        doctorWiseAppointment?.length > 0 ? (
                            <DisplayAppointmentList doctorWiseAppointment={doctorWiseAppointment} />
                        ) : (
                            <div className="bg-green-50 text-center p-6 rounded-xl ">
                                <h2 className="text-lg font-semibold text-gray-700"> {defaultDay}day have no appointments</h2>
                                <p className="text-sm text-gray-600 mt-2">
                                    If you take an appointment, your serial number will be <span className="font-bold text-green-600">1</span>.
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>

        </TabPanel>
    </Tabs>)
};
