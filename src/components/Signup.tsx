import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {doCreateAuser} from "@/auth/Authfunctions";

const Signup = () => {

  // const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPass,setConfirmPass] = useState("");
  const[errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e:React.FormEvent) =>{
    e.preventDefault();

    if(password !== confirmPass){
      setErrorMessage("password doesn't match!");
    }

    await doCreateAuser(email, password);
    navigate("/login");
  };

  
  return (
    <form onSubmit={handleRegister} className="mx-auto p-8 flex flex-col w-[400px] max-w-[400px] space-y-4 rounded-md shadow-2xl justify-center items-center">
        <h3 className="text-xl font-bold">Create a New Account</h3>
        {/* <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="name" className="font-semibold">UserName</label>
          <input className="p-1.5" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div> */}
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input className="p-1.5" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="password" className="font-semibold">Password</label>
          <input className="p-1.5" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="password" className="font-semibold">Confirm Password</label>
          <input className="p-1.5" type="password" value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}}/>
        </div>
        <button type="submit" className="bg-violet-800 cursor-pointer w-full rounded-lg p-2 text-white">Sign Up</button>
        {errorMessage && <><p className="text-red-600 w-full flex justify-center items-center">Passowrd Doesn't Match!</p></>}
        <p>Already have an account? <Link className="text-violet-700 font-semibold" to="/login">Login</Link></p>
    </form>
  )
}

export default Signup;