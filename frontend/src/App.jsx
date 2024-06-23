import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import LoginPopup from "./component/LoginPopup/LoginPopup";
import Navbar from "./component/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
