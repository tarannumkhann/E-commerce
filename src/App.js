import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import CheckoutPage from "./Component/checkoutPage";

// Components
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

// Contexts
import { CartContextProvider } from "./Context/CartContext";
import SidebarContextProvider from "./Context/SidebarContext";
import ProductProvider from "./Context/productContext";


function App() {
  return (
    <CartContextProvider>
      <SidebarContextProvider>
        <ProductProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            <Sidebar />
            <Footer />
          </Router>
        </ProductProvider>
      </SidebarContextProvider>
    </CartContextProvider>
  );
}

export default App;
