import React from 'react';
import AuthHook from '../Hooks/AuthHook';
import { Navigate, useLocation } from 'react-router';
import ProgressLoaindg from './../Share/ProgressLoaindg';

const PrivetRouter = ({ children }) => {

    const { user, loading } = AuthHook()
    const loc = useLocation()


    if (loading) return <div className='min-h-screen flex justify-center items-center'>
        <ProgressLoaindg></ProgressLoaindg>
    </div>

    if (!user) return <Navigate state={`${loc?.pathname}`} to={'/login'}></Navigate>

    return children;
};

export default PrivetRouter;