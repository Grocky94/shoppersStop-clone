
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SingleProduct from "./Component/SingleProduct";
import MultipleProduct from "./Component/MultipleProduct";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/singleproduct" element={<SingleProduct />} />
        <Route exact path="/multipleproducts" element={<MultipleProduct/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
