import React from 'react';
import AuthHook from '../Hooks/AuthHook';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {

    const {user,loading} = AuthHook()
    const loc = useLocation()

    
    if(loading) return <h1>laodgin..........</h1>

    if(!user) return <Navigate state={`${loc?.pathname}`} to={'/login'}></Navigate>

    return children;
};

export default PrivetRouter;