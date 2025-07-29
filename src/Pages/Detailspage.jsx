import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../Hooks/AxiosSequre';
import { useQuery } from '@tanstack/react-query';
import ProgressLoaindg from '../Share/ProgressLoaindg';
import { Information } from '../Components/DetailsPageInformation/Information';

const Detailspage = () => {

    const { id } = useParams()
    const axiosSequere = useAxiosSecure()

    const { data: doctorDetails = {}, isLoading } = useQuery({
        queryKey: ['details', id],
        enabled: !!id,
        queryFn: (async () => {
            const result = await axiosSequere.get(`/detalsInfo/${id}`)
            return result?.data
        })
    })

    if (isLoading) {
        return <div className='min-h-screen my-30'>
            <ProgressLoaindg></ProgressLoaindg>
        </div>
    }
    return (
        <div>
            <div className='bg-gray-50 py-8'>
                <div className='w-[98%] mx-auto flex flex-col sm:flex-row justify-between gap-6  rounded-xl  p-6'>


                    <div className='flex sm:flex-row flex-col gap-5 w-full sm:w-2/3'>


                        <div className='sm:w-[30%]  mx-auto sm:mx-0 relative rounded-md p-2 bg-white  flex flex-col items-center'>
                            <img className='w-full h-full object-cover rounded-md' src={doctorDetails?.image} alt={doctorDetails?.name} />
                            <span className='mt-2 absolute bottom-0 left-1/3 bg-green-700 text-white text-xs px-5 py-1 rounded-full shadow-sm'>
                                {doctorDetails?.visitDays?.includes("Tue") ? "চেম্বার খোলা" : "চেম্বার বন্ধ"}
                            </span>
                        </div>


                        <div className='flex flex-col justify-center space-y-2 '>
                            <h2 className='sm:text-5xl font-bold text-[#007F5F]'>{doctorDetails?.name}</h2>
                            <p><span className="font-medium">Degree:</span> {doctorDetails?.degree}</p>
                            <p><span className="font-medium">Education:</span> {doctorDetails?.medicalCollege}</p>


                            <span className='inline-block bg-blue-500 text-white text-xs px-5 py-2 rounded-full w-fit'>
                                {doctorDetails?.department}
                            </span>

                            <div className='flex gap-3 text-xl text-gray-700 mt-1'>
                                <p><span className="font-bold">BMDC:</span> {doctorDetails?.bmdcNumber}</p>
                                <p><span className="font-bold text-xl">Exp:</span> {doctorDetails?.experience} years</p>
                            </div>

                            <p><span className="font-medium">Work:</span> {doctorDetails?.work}</p>
                            <p><span className="font-medium">Specialty:</span> {doctorDetails?.specialty}</p>
                        </div>
                    </div>


                    <div className='sm:w-1/3 w-full'>
                        <div className='bg-white rounded-xl  p-6 space-y-6 flex flex-col items-center justify-center'>


                            <h1 className='text-gray-600 flex flex-wrap items-center gap-2'>
                                <span className="font-semibold">Visit Days:</span>
                                {doctorDetails?.visitDays?.map((day, index) => (
                                    <span
                                        key={index}
                                        className='bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs font-medium'
                                    >
                                        {day}
                                    </span>
                                ))}
                            </h1>


                            <p className="font-bold text-xl text-[#007F5F] text-center uppercase tracking-wide">
                                Consultation Fee
                            </p>


                            <div className='bg-blue-500 text-white text-3xl px-10 py-2 rounded-full shadow-md text-center'>
                                ৳{doctorDetails?.fee || '---'}
                            </div>


                            <button className="bg-[#007F5F] text-white px-6 py-3 rounded-full hover:bg-[#005f49] transition-all duration-300 shadow-sm">
                                Take Appointment
                            </button>

                            {/* Optional Chamber Info */}
                            {/* <p className='text-gray-500 text-sm text-center'>
      <span className="font-semibold">Chamber:</span> {doctorDetails?.chamber}
    </p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[98%] mx-auto mt-10'>
                <Information doctorDetails={doctorDetails}></Information>
            </div>
        </div>

    );
};

export default Detailspage;