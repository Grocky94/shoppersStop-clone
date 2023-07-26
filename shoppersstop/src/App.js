
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SingleProduct from "./Component/SingleProduct";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/singleproduct" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
