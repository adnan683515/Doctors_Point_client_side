import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FcInfo } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";

export const Information = ({ doctorDetails }) => (
    <Tabs className="border-none">
        <TabList className="flex cursor-pointer gap-4 border-none">
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
            <div>
                <h1 className='text-blue-500 text-2xl font-semibold'>About Info</h1>
                <div className=' sm:w-[60%] mt-4'>
                    <p>
                        {doctorDetails?.additionalInfo}
                    </p>
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
    </Tabs>
);
