import React, { useState } from "react";

function ComplaintRegister() {
  const [data, setData] = useState({
    ename: "",
    complaint: ""
  });

  const referenceNumber = 3004;

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thanks " +
        data.ename +
        "\nYour Complaint was Submitted.\nTransaction ID is : " +
        referenceNumber
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "red" }}>
        Register your complaints here!!!
      </h2>

      <form onSubmit={handleSubmit}>
        <table
          style={{
            margin: "auto"
          }}
        >
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="ename"
                  value={data.ename}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Complaint:</td>
              <td>
                <textarea
                  name="complaint"
                  value={data.complaint}
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ComplaintRegister;