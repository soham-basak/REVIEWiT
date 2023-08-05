import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import SingleMovie from "./pages/SingleMovie/SingleMovie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
