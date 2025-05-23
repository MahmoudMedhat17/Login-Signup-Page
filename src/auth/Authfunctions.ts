import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "@/firebase/firebase";


// This function to let the user sign up a new account.
export const doCreateAuser = async (email:string,password:string) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}


// This function to let user login with his account.
export const doLogInAuser = (email:string,password:string) =>{
    return signInWithEmailAndPassword(auth, email, password);
}


// This function to let user have the option to sign in using his google account.
export const signInWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
}

// This function to sign out the user that logged in with his email and saved his email to firebase.
export const signOut = () =>{
    return auth.signOut();
}