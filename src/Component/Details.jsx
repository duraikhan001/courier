import React from "react";
import { useParams } from "react-router-dom";

export const CourierDetails = () => {
  const { id } = useParams();
  const parcel = {
    trackingId: id || "12345",
    status: "In Transit",
    from: "Chennai",
    to: "Mumbai",
    location: "Bangalore Hub",
    expectedDelivery: "29 Jan 2026",
  }
  return (
    <div
      style={{
        backgroundColor: "#e9e9e9ff",
        backgroundImage: "url('https://cookie-script.com/images/news/documentation/website-tracking.png')",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <center>
        <h1 style={{ color: "#0b0e11ff", backgroundColor: "yellow" }}>Courier Details</h1>
        <table
          border="1"
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            width: "70%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr>
              <th style={{ padding: "10px" }}>Tracking ID</th>
              <td style={{ padding: "10px" }}>{parcel.trackingId}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>Status</th>
              <td style={{ padding: "10px" }}>{parcel.status}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>From</th>
              <td style={{ padding: "10px" }}>{parcel.from}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>To</th>
              <td style={{ padding: "10px" }}>{parcel.to}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>Current Location</th>
              <td style={{ padding: "10px" }}>{parcel.location}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>Expected Delivery</th>
              <td style={{ padding: "10px" }}>{parcel.expectedDelivery}</td>
            </tr>
          </tbody>
          <p></p>
          <tbody>
            <tr>
              <th style={{ padding: "10px" }}>Tracking ID</th>
              <td style={{ padding: "10px" }}>{14527}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>Status</th>
              <td style={{ padding: "10px" }}>{parcel.status}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>From</th>
              <td style={{ padding: "10px" }}>{parcel.from}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>To</th>
              <td style={{ padding: "10px" }}>{parcel.to}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>Current Location</th>
              <td style={{ padding: "10px" }}>{parcel.location}</td>
            </tr>
            <tr>
              <th style={{ padding: "10px" }}>Expected Delivery</th>
              <td style={{ padding: "10px" }}>{parcel.expectedDelivery}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  )
}


export default CourierDetails;
