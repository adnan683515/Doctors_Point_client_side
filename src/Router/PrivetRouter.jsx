import React from 'react';
import AuthHook from '../Hooks/AuthHook';
import { Navigate } from 'react-router';

const PrivetRouter = ({children}) => {

    const {user,loading} = AuthHook()
    
    if(loading) return <h1>laodgin..........</h1>

    if(!user) return <Navigate to={'/login'}></Navigate>

    return children;
};

export default PrivetRouter;