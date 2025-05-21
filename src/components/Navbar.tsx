import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center bg-gray-400 w-full h-20">
        <nav className="flex items-center gap-4">
            <Link to="/login">
                <p>Login</p>
            </Link>
            <Link to="/signup">
                <p>Signup</p>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar;






