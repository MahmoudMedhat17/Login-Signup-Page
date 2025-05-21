import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="space-y-20">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App;