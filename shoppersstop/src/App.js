
// import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from "./Component/Login";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
