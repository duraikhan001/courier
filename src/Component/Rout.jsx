
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CourierDetails from "./Details";
import About from "./About";
import { Status } from "./Status";

function Rout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CourierDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </Router>
  )
}

export default Rout;