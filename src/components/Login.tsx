import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  return (
    <form action="" className="mx-auto p-8 flex flex-col w-[400px] max-w-[400px] space-y-4 rounded-md shadow-xl justify-center items-center">
        <h3 className="text-xl font-bold">Welcome Back</h3>
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input className="p-1.5" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="password" className="font-semibold">Password</label>
          <input className="p-1.5" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button className="bg-violet-800 cursor-pointer w-full rounded-lg p-2 text-white">Log in</button>
        <p>Don't have an account? <Link className="text-violet-700 font-semibold" to="/login">Sign up</Link></p>
        <span className="font-bold">OR</span>
        <button className="flex items-center justify-center gap-3 cursor-pointer rounded-lg p-2 border-2 border-gray-100 w-full">
          <img src="/google.png" className="w-6 h-6"/>
          <span className="font-semibold">Continue with Google</span>
        </button>
    </form>
  )
}

export default Login;