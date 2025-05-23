import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {doLogInAuser,signInWithGoogle} from "@/auth/Authfunctions";
import { UserAuth } from "@/context/authContext";


const Login = () => {

  const {userLoggedIn} = UserAuth();

  const navigate = useNavigate();
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // const[errorMessage, setErrorMessage] = useState("");


  // Here is the function that handles the submit of the user when he / she logs in with their account
  const handleSubmit = async (e:React.FormEvent) =>{
    e.preventDefault();
    // Check if user isLogged in? if yes then do what's inside the condition
    if(!isUserLoggedIn){
      // Set the state to true
      setIsUserLoggedIn(true);
      // Use the function from firebase and pass to it the email and password states the user gonna pass in the form
      await doLogInAuser(email, password);
      console.log(email);
    }
  }


  // Handles the signing in of the user using google account
  const handleGoogleSignIn = async (e:React.FormEvent)=>{
      e.preventDefault();
      // Check if user isLogged in? if yes then do what's inside the condition
      if(!isUserLoggedIn){
        // Set the state to true
        setIsUserLoggedIn(true);
        // Use this function from firebase to sign in with google
        await signInWithGoogle();
      }
    }


  return (
    <>
    {/* If user is logged in? then navigate the user to the home page */}
    {userLoggedIn && navigate("/")};
      <form onSubmit={handleSubmit} className="mx-auto p-8 flex flex-col w-[400px] max-w-[400px] space-y-4 rounded-md shadow-xl justify-center items-center">
          <h3 className="text-xl font-bold">Welcome Back</h3>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input className="p-1.5" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input className="p-1.5" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <button onClick={handleSubmit} type="submit" className="bg-violet-800 cursor-pointer w-full rounded-lg p-2 text-white">Log in</button>
          <p>Don't have an account? <Link className="text-violet-700 font-semibold" to="/signup">Sign up</Link></p>
          <span className="font-bold">OR</span>
          <button onClick={handleGoogleSignIn} type="submit" className="flex items-center justify-center gap-3 cursor-pointer rounded-lg p-2 border-2 border-gray-100 w-full">
            <img src="/google.png" className="w-6 h-6"/>
            <span className="font-semibold">Continue with Google</span>
          </button>
      </form>
    </>
  )
}

export default Login;