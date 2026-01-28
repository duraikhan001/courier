import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        backgroundImage: "url('https://cookie-script.com/images/news/documentation/website-tracking.png')",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <center>
        <h1 style={{ color: "#000000ff", backgroundColor: "yellow" }}>About Our Courier Service</h1>
        <p
          style={{
            maxWidth: "800px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          We are committed to providing fast, reliable, and secure courier
          services across the globe. Our mission is to make parcel delivery
          simple and transparent, ensuring that every package reaches its
          destination safely and on time. With advanced tracking technology, you
          can monitor your shipment in real-time and stay updated at every step
          of the journey.
        </p>

        <div
          style={{
            marginTop: "40px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 2px 6px rgba(228, 5, 5, 0.1)",
          }}
        >
          <h2>Our Values</h2>
          <ul style={{ textAlign: "left", lineHeight: "1.8" }}>
            <li>Customer-first approach with reliable service</li>
            <li> Speed and efficiency in every delivery</li>
            <li> Security and transparency for peace of mind</li>
            <li> Building trust through consistent performance</li>
          </ul>
        </div>
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2> Contact Us</h2>
          <p>
            Have questions or need support? Reach out to our customer service
            team anytime.
          </p>
          <p>Email: devil@courier.com</p>
          <p>Phone: +91 96290 33356</p>
        </div>
      </center>
    </div>
  )
}

export default About;
