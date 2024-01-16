import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes,Route, Router, Link } from "react-router-dom";
import DragAndDrop from "./pages/dragAndDrop";
import Payment from "./pages/payment";
function App() {


  return (
    <div >
      <Link to={"/payment"} className="btn btn-dark">Payment</Link>
      <Link to={"/drag"} className="btn btn-dark">Drag</Link>
       <Routes>
      <Route path="/drag" element={<DragAndDrop />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
    </div>
  );
}

export default App;
