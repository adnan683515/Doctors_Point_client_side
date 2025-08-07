import React from 'react';
import AuthHook from '../Hooks/AuthHook';
import ProgressLoaindg from '../Share/ProgressLoaindg';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/AxiosSequre';
import MyAppointmentTable from '../Components/AppointmentList/MyAppointment/MyAppointmentTable';

const MyAppointments = () => {

    const { user, loading } = AuthHook()
    const axiosSequre = useAxiosSecure()

    const { data: myappoinmentList = [], isLoading } = useQuery({
        queryKey: ['myappoinment', user?.email],
        enabled: !!user && !loading,
        queryFn: (async () => {
            const result = await axiosSequre.get(`/myappointments/${user?.email}`)
            return result?.data
        })
    })

    console.log(myappoinmentList)

    if (!user || loading || isLoading) {
        return <div className='min-h-screen flex justify-center items-center'>
            <ProgressLoaindg></ProgressLoaindg>
        </div>
    }

    return (
        <div className='flex flex-col sm:flex-row justify-between sm:w-[90%]  mx-auto'>
            <div className='sm:w-[60%]'>

                appointment list showing
                <MyAppointmentTable  data={myappoinmentList} ></MyAppointmentTable>
            </div>
            <div className='sm:w-[40%]  flex justify-center items-center'>
                <div>
                    <div>
                        <h1>Varchatr</h1>
                    </div>
                    <div>
                        recomendet doctors shoeing
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyAppointments;