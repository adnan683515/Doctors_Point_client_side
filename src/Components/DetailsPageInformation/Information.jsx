import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FcInfo } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";


const convertTo12Hour = (timeStr) => {
    if (!timeStr) return 'Not specified';

    const [hour, minute] = timeStr.split(':');
    const hr = parseInt(hour);
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const formattedHour = hr % 12 === 0 ? 12 : hr % 12;

    return `${formattedHour}:${minute} ${ampm}`;
};

export const Information = ({ doctorDetails }) => {




    return (<Tabs className="border-none">
        <TabList className="flex  flex-wrap cursor-pointer gap-4 border-none">
            <Tab className="px-4 flex  gap-2 py-2 text-sm text-gray-600 hover:text-[#007F5F] bg-none  focus:outline-none"> <FcInfo size={40} />
                <div className='flex justify-center items-center text-xl'>
                    <h1>Info</h1>

                </div>
            </Tab>
            <Tab className="px-4 flex py-2 gap-3 text-sm text-gray-600 hover:text-[#007F5F] focus:outline-none">
                <div className='flex justify-center  items-center'>
                    <FcIdea size={40} />
                </div>
                <div className='flex justify-center text-xl items-center'>
                    <h1>Reviews</h1>
                </div>
            </Tab>

            <Tab className="px-4 flex py-2 gap-3 text-sm text-gray-600 hover:text-[#007F5F] focus:outline-none">
                <div className='flex justify-center  items-center'>
                    <FcGraduationCap size={40} />
                </div>
                <div className='flex justify-center text-xl items-center'>
                    <h1>Certificate</h1>
                </div>
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
                                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-medium transition-all duration-300"
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
                                {convertTo12Hour(doctorDetails?.endTime)|| 'Not specified'}
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
    </Tabs>)
};
