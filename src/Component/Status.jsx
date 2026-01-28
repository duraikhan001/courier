import { useState } from "react";

export const Status = () => {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [location, setLocation] = useState("");
  const [arr, setArr] = useState([]);

  const display = () => {
    setArr([
      ...arr,
      { trackingId: id, parcelStatus: status, parcelLocation: location, from: from, to: to }
    ])
  }

  const deleteItem = (index) => {
    const newArr = arr.filter((_, i) => i !== index);
    setArr(newArr);
  }

  const updateItem = (index) => {
    const updatedArr = arr.map((item, i) =>
      i === index
        ? { trackingId: id, parcelStatus: status, parcelLocation: location, from: from, to: to }
        : item
    )
    setArr(updatedArr)
  }

  return (
    <div   style={{
            marginTop: "40px",
            backgroundColor: "white",
            backgroundImage: "url('https://cookie-script.com/images/news/documentation/website-tracking.png')",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }} >
      <h1 style={{ backgroundColor: 'yellow',color:"black" }}>Parcel Status Management</h1>
      <form>
        <p>
          ID:
          <input type="text" placeholder="Enter ID" onChange={(e) => setId(e.target.value)} />{" "}
          <br />
          Status:
          <input
            type="text" placeholder="Enter Status" onChange={(e) => setStatus(e.target.value)}
          />{" "}
          <br />
          Location:
          <input
            type="text"
            placeholder ="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />{" "}
          <br />
          From:
          <input
            type="text"
            placeholder="Enter From"
            onChange={(e) => setFrom(e.target.value)}
          />{" "}
          <br />
          To:
          <input
            type="text"
            placeholder="Enter To"
            onChange={(e) => setTo(e.target.value)}
          />{" "}
          <br />
        </p>
      </form>
      <button onClick={display}>Insert</button>
      {arr.length > 0 && (
        <table
          border="1"
          style={{ marginTop: "20px", backgroundColor: "white", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Location</th>
              <th>From</th>
              <th>To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => (
              <tr key={index}>
                <td>{item.trackingId}</td>
                <td>{item.parcelStatus}</td>
                <td>{item.parcelLocation}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>
                  <button onClick={() => updateItem(index)}>Update</button>
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
