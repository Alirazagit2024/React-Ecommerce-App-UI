import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/category/category";
import ProductDetailPage from "./pages/product/product";
import App from "./App";
import "./App.css";
import NotFound from "./components/Notfound";
import Footer from "./components/Footer";
import Category from "./pages/category/category";
import Cart from "./pages/cart/cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
