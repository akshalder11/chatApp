import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="h-screen flex items-center justify-center mainBack ">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/logIn' element={<Login/>} />
        <Route path='/signUp' element={<Signup />} />
      </Routes>
      
    </div>
  );
}

export default App;
