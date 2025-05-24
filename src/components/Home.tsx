import { UserAuth } from "@/context/authContext";


const Home = () => {


  const {currentUser} = UserAuth();


  return (
    <div className="flex justify-center items-center w-full h-screen">
      {
        currentUser?.email ?
        (
        <h3 className="text-2xl font-semibold text-center">Welcome back {currentUser?.email && currentUser.email}</h3>
        )
        :
        <h3 className="text-2xl font-semibold text-center">Welcome back!</h3>
      }
    </div>
  )
}

export default Home;