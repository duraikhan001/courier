import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://cookie-script.com/images/news/documentation/website-tracking.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "40px",
        color: "#333",
      }}
    >
      <center>
        <h1 style={{ backgroundColor: "yellow", padding: "10px" }}>
          Welcome to Courier Tracking
        </h1>
        <p
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "700px",
          }}
        >
          Track and manage your parcels easily with our reliable courier
          tracking system. Enter your tracking ID to get real-time updates on
          your shipment’s location, status, and estimated delivery time. Our
          platform ensures transparency, speed, and convenience for both senders
          and receivers. Whether you’re shipping documents, packages, or bulk
          orders, we make sure you stay informed every step of the way.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link
            to="/status"
            style={{
              backgroundColor: "#ec8b0bff",
              color: "white",
              padding: "12px 24px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Track Your Parcel
          </Link>
        </div>

        <div style={{ marginTop: "50px", backgroundColor: "white", padding: "20px", borderRadius: "8px", maxWidth: "700px" }}>
          <h2>Why Choose Us?</h2>
          <ul style={{ textAlign: "left" }}>
            <li> -Real-time parcel tracking</li>
            <li> -Reliable delivery updates</li>
            <li> -Track shipments worldwide</li>
            <li> -Secure and transparent system</li>
          </ul>
        </div>

      </center>
    </div>
  )
}

export default Home;
