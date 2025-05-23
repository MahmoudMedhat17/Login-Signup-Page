import { UserAuth } from "@/context/authContext";


const Home = () => {


  const {currentUser} = UserAuth();


  return (
    <div className="flex justify-center items-center w-full h-screen">
        <h3 className="text-2xl font-semibold text-center">Welcome back {currentUser?.email ? currentUser.email : "User"}! :)</h3>
    </div>
  )
}

export default Home;