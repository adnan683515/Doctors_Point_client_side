import React, { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext';

const AuthHook = () => {
    const auth = useContext(Authcontext)
    return  auth;
};

export default AuthHook;