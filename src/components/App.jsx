import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prescription from "./Prescription";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Response from "./Response";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/response/:contact" element={<Response />} />
      </Routes>
    </Router>
  );
}

export default App;
