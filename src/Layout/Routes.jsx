import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import Home from "../components/Home/Home";
import Logout from "../components/Logout/Logout";
import ProductDetails from "../components/ProductDetails/productDetails";
function RoutesLayout() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RoutesLayout;
