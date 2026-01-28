import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <center>
        <h2 className="logo" style={{ position: "left" }}>Courier Tracking</h2>
      </center>
      <ul className="nav-links">
        <li><Link to="/" style={{ color: "black", textDecoration: "none", backgroundColor: "white" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "black", textDecoration: "none", backgroundColor: "white" }}>About</Link></li>
        <li><Link to="/details" style={{ color: "black", textDecoration: "none", backgroundColor: "white" }}>Details</Link></li>
        <li><Link to="/status" style={{ color: "black", textDecoration: "none", backgroundColor: "white" }}>Status</Link></li>
      </ul>
    </nav>
  )
}


export default Navbar;
