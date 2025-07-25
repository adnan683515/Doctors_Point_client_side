import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { Authcontext } from './AuthContext';


const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const handleSignup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdate = (userinfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,userinfo)
    }

    const handleLogout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return (() => {
            unsuscribe()
        })
    }, [user])

    const Contextinformation = {
        handleSignup,
        loading,
        handleLogin,
        user,
        handleUpdate,
        handleLogout,
        setLoading

    }

    return <Authcontext.Provider value={Contextinformation}>
        {children}
    </Authcontext.Provider>
        ;
};

export default Authprovider;