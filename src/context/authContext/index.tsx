import React, { useState,useEffect, createContext } from "react";
import {auth} from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext({
    currentUser:null,
    userLoggedIn:false,
    loading:false,
});
    

const UserAuthContext = ({children}:{children:React.ReactNode}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [loading,setLoading] = useState(true);

    const intialiseUser = (user) =>{
        if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }
        else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, intialiseUser);
        return unSubscribe;
    },[]);
    
    return(
        <AuthContext.Provider value={{currentUser, userLoggedIn, loading}}>
            {children}
        </AuthContext.Provider>
    )
};



export default UserAuthContext;