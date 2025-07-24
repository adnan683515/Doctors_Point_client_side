import React from 'react';
import { Authcontext } from './AuthContext';

const Authprovider = ({ children }) => {

    const contextInformation = {
        info: "adnan"
    }
    return <Authcontext.Provider value={contextInformation}>
            {children}
        </Authcontext.Provider>
    ;
};

export default Authprovider;