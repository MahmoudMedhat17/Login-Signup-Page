import React, { useState,useEffect, createContext, useContext } from "react";
import {auth} from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";


interface UserProps{
    email:string;
    password:string;
}

interface AuthContextProps{
    currentUser:UserProps | null;
    userLoggedIn:boolean,
    loading:boolean,
}


const AuthContext = createContext<AuthContextProps>({
    currentUser:null,
    userLoggedIn:false,
    loading:true,
});
    

const UserAuthContext = ({children}:{children:React.ReactNode}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [loading,setLoading] = useState(true);

    const intialiseUser = (user:UserProps) =>{
        if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }
        else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    };

    // This function removes the listener when no longer needed to prevent memory leaks
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

// Custom hook to useContext the context here and use the customHook to call the props from context
export const UserAuth = () => useContext(AuthContext);

export default UserAuthContext;