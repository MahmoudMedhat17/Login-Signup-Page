import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "@/context/authContext";
import { signOut } from "@/auth/Authfunctions";

const Navbar = () => {

  const {userLoggedIn} = UserAuth();
  const navigate = useNavigate();

  const handleSignout = () =>{
    signOut();
    navigate("/login");
  }


  return (
    <header className="flex items-center justify-center bg-gray-400 w-full h-20">
        <nav className="flex items-center gap-4">
          {
            userLoggedIn ?
            <p onClick={handleSignout} className="cursor-pointer">Sign Out</p>
            :
            (
              <>
              <Link to="/login">
                <p>Login</p>
              </Link>
              <Link to="/signup">
                <p>Signup</p>
              </Link>
              </>
            )
          }
        </nav>
    </header>
  )
}

export default Navbar;






