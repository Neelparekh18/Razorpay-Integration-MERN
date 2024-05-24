import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PaymentSuccess from "./pages/paymentSuceess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
}

export default App;
