import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
