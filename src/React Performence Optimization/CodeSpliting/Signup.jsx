import React from "react";

function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 Signup Page</h1>

      <form
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "15px",
          width: "300px",
        }}
      >
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;