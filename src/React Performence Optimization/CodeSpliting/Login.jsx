import React from "react";

function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔐 Login Page</h1>

      <form
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "15px",
          width: "300px",
        }}
      >
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;