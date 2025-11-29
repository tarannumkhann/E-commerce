import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
//import component
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Footer from "./Component/Footer";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
