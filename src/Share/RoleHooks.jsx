import React from 'react';
import AuthHook from '../Hooks/AuthHook';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/AxiosSequre';


const RoleHooks = () => {

    // const 
    const {user,loading} = AuthHook()
    const  axiosSequrere = useAxiosSecure()
    const {data:details={},isLoading:roleLoading } = useQuery({
        queryKey : ['role',user?.email],
        enabled : !loading  && !!user?.email,
        queryFn : (async ()=>{
            const result = await  axiosSequrere.get(`/petient/${user?.email}`)
            return result?.data
        })
    })
    return [details,roleLoading];
};

export default RoleHooks;