import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../Hooks/AxiosSequre';
import { useQuery } from '@tanstack/react-query';
import ProgressLoaindg from '../Share/ProgressLoaindg';
import { Information } from '../Components/DetailsPageInformation/Information';
import AuthHook from '../Hooks/AuthHook';
import toast from 'react-hot-toast';
import RoleHooks from '../Share/RoleHooks';
import {
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
} from 'react-share';
import VisaCardModal from '../Components/ViseCardModal/VisaCardModal';
import AxiosHook from './../Hooks/AxiosHook';


const Detailspage = () => {

    const { id } = useParams()
    let [isOpen, setIsOpen] = useState(false)
    const axiosHook = AxiosHook()
    const [userInfo, roleLoading] = RoleHooks()
    const axiosSequere = useAxiosSecure()
    const { user, loading } = AuthHook()


    const { data: doctorDetails = {}, isLoading } = useQuery({
        queryKey: ['details', id],
        enabled: !!id,
        queryFn: (async () => {
            const result = await axiosSequere.get(`/detalsInfo/${id}`)
            return result?.data
        })
    })

    const shareUrl = window.location.href;
    const title = `Check out Dr. ${doctorDetails?.name}'s profile!`;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date().getDay();
    const dayName = days[today];

    const visiFee = parseInt(doctorDetails?.fee)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }



    const getOffer = () => {
        if (userInfo?.status !== 'patient') {
            return toast.error("Only petient Can Take This offer")
        }
        if (parseInt(userInfo?.service) < 1) {
            return toast.error("You must take at least 2 appointments for any doctor to unlock this offer");
        }
    }

    const paymentApiFunction = async () => {
        const { data } = await axiosHook.get(`/init/${doctorDetails?._id}/${user?.email}`);
        window.location.href = data.url; // manually redirect here
    };

    if (isLoading || roleLoading || loading) {
        return <div className='min-h-screen my-30'>
            <ProgressLoaindg></ProgressLoaindg>
        </div>
    }


    return (
        <div className=' w-[100%] '>
            <div className='bg-gray-50 py-8 '>
                <div className='w-[98%] mx-auto flex flex-col sm:flex-row justify-between gap-6  rounded-xl  p-6'>


                    <div className='flex sm:flex-row flex-col gap-5 w-full sm:w-2/3'>


                        <div className='sm:w-[30%]  w-[90%] max-h-[50vh]  mx-auto sm:mx-0 relative rounded-md p-2 bg-white  flex flex-col items-center'>
                            <img className='w-full  sm:h-full h-[55vh] object-cover rounded-md' src={doctorDetails?.image} alt={doctorDetails?.name} />
                            <span className={`mt-2 absolute  sm:-bottom-2 right-0 sm:right-1/3 ${doctorDetails?.visitDays.includes(dayName) ? 'bg-green-600' : 'bg-rose-600'}  text-white text-xs px-10 sm:px-7 sm:py-2 py-3 rounded-full shadow-sm`}>
                                {doctorDetails?.visitDays?.includes(dayName) ? "On Day" : "Off Day"}
                            </span>
                        </div>


                        <div className='flex flex-col sm:mt-0 mt-5 justify-center space-y-2 '>
                            <h2 className='sm:text-5xl text-2xl font-bold text-[#007F5F]'>{doctorDetails?.name}</h2>
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


                    <div className='sm:w-1/3 w-full '>
                        <div className="rounded-2xl p-6 space-y-6 flex flex-col items-center sm:justify-center">


                            <p className="text-xl font-bold text-[#007F5F] text-center uppercase tracking-wide">
                                Consultation Fee
                            </p>

                            <div className="relative inline-block text-center">
                                <div className="bg-blue-500 text-white text-2xl px-6 py-2 rounded-full font-semibold">
                                    ৳{doctorDetails?.fee || '---'}
                                </div>
                                <span className="absolute -top-3 -right-3 bg-green-400 text-black text-[10px] font-bold px-2 py-[2px] rounded-full shadow-sm animate-pulse">
                                    15% OFF
                                </span>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className="flex gap-3 items-center mt-4 flex-wrap">


                                    <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                                        <WhatsappIcon size={40} round />
                                    </WhatsappShareButton>

                                    <TwitterShareButton url={shareUrl} title={title}>
                                        <TwitterIcon size={40} round />
                                    </TwitterShareButton>

                                    <TelegramShareButton url={shareUrl} title={title}>
                                        <TelegramIcon size={40} round />
                                    </TelegramShareButton>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full">
                                <button onClick={open} className="bg-[#007F5F] text-white text-sm px-4 py-2 cursor-pointer rounded-full font-medium hover:scale-95 duration-700 transition-all  w-full sm:w-auto">
                                    Take Appointment
                                </button>


                                <button onClick={getOffer} className="border border-[#007F5F] text-[#007F5F] text-sm px-4 py-2 rounded-full font-medium hover:scale-95 duration-700  cursor-pointer transition-all  w-full sm:w-auto">
                                    Get Discount Offer
                                </button>


                                {/* {
                                    doctorDetails?.visitDays.includes(dayName) && userInfo?.status === 'patient' && <button onClick={paymentApiFunction} className="bg-[#007F5F] text-white text-sm px-4 py-2 cursor-pointer rounded-full font-medium hover:scale-95 duration-700 transition-all  w-full sm:w-auto">
                                        Payment
                                    </button>
                                } */}


                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div className='w-[98%] mx-auto mt-10'>
                <Information doctorDetails={doctorDetails}></Information>

            </div>
            {
                isOpen && <div data-aos="zoom-in">
                    <VisaCardModal visiFee={visiFee} dept={doctorDetails?.department} doctorId={doctorDetails?._id} user={user} days={doctorDetails?.visitDays} close={close} isOpen={isOpen}></VisaCardModal>
                </div>
            }

        </div>

    );
};

export default Detailspage;