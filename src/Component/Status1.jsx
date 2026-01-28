
import { useState } from "react";

const parcelsDB = [
  { trackingId: "12345", status: "In Transit", from: "Chennai", to: "Delhi", current: "Bangalore Hub", expectedDelivery: "29 Jan 2026" },
  { trackingId: "456789", status: "Delivered", from: "Mumbai", to: "Pune", current: "Pune", expectedDelivery: "25 Jan 2026" },
  { trackingId: "78901", status: "Out for Delivery", from: "Bangalore", to: "Hyderabad", current: "Hyderabad", expectedDelivery: "30 Jan 2026" },
];

export const Status1 = () => {
  const [id, setId] = useState("");
  const [parcel, setParcel] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e?.preventDefault();
    const q = id.trim();
    if (!q) {
      setError("Please enter a tracking ID.");
      setParcel(null);
      return;
    }
    setError("");
    const found = parcelsDB.find((p) => p.trackingId.toLowerCase() === q.toLowerCase());
    if (found) {
      setParcel(found);
    } else {
      setParcel(null);
      setError(`No parcel found with ID ${id}`);
    }
  };

  return (
    <div
      style={{
        marginTop: "40px",
        backgroundColor: "white",
        backgroundImage: "url('https://cookie-script.com/images/news/documentation/website-tracking.png')",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "600px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ backgroundColor: "yellow", color: "black" }}>Live Parcel Tracking</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
        <label htmlFor="trackingId" className="sr-only">Tracking ID</label>
        <input
          id="trackingId"
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd" }}
        />
        <button type="submit" disabled={!id.trim()}>Track</button>
      </form>

      {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}

      {parcel && (
        <table border="1" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse", color: "red" ,backgroundColor:"white"}}>
          <thead>
            <tr>
              <th style={{ padding: 8, color: "blue" }}>ID</th>
              <th style={{ padding: 8, color: "blue" }}>Status</th>
              <th style={{ padding: 8, color: "blue" }}>From</th>
              <th style={{ padding: 8, color: "blue" }}>To</th>
              <th style={{ padding: 8, color: "blue" }}>Current Location</th>
              <th style={{ padding: 8, color: "blue" }}>Expected Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 8 }}>{parcel.trackingId}</td>
              <td style={{ padding: 8 }}>{parcel.status}</td>
              <td style={{ padding: 8 }}>{parcel.from}</td>
              <td style={{ padding: 8 }}>{parcel.to}</td>
              <td style={{ padding: 8 }}>{parcel.current}</td>
              <td style={{ padding: 8 }}>{parcel.expectedDelivery}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Status1;