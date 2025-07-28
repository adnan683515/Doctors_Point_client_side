import React from 'react';
import AxiosHook from '../Hooks/AxiosHook';
import { useQuery } from '@tanstack/react-query';

const FindDoctors = () => {

    const  axiosHook = AxiosHook()

    const {data:allDoctors=[],isloading} = useQuery({
        queryKey : 'doctors',
        queryFn : (async ()=>{
            const data = await axiosHook.get('/allDoctorsGet')
            console.log(data?.data)
        })
    })


    return (
        <div>
            <h1>find doctors</h1>
        </div>
    );
};

export default FindDoctors;