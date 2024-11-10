import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Home from "./pages/Home/Home";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen flex items-center justify-center mainBack ">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/logIn"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signUp"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </div>
  );
}

export default App;
