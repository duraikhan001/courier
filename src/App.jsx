import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Details from "./Component/Details";
import { Status } from "./Component/Status"; 
import Rout from "./Component/Rout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/status" element={<Status />} />
          <Route path="/*" element={<Rout />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;