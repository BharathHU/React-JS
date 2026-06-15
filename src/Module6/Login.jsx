import React, { useState } from 'react';

// function Login() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <div style={style.head}>
//         <br />
//       <input type="text" required name="username" placeholder='Enter user name' />
//       <br /> <br />
//       <input type="password" required name="password" placeholder='Enter password'/>
//       <br /><br />

//       <button onClick={toggleLogin}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>

//       <h3>
//         {isLoggedIn
//           ? "Welcome! You are logged in."
//           : "Please login."}
//       </h3>
//     </div>
//   );
// }
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <form onSubmit={handleSubmit} style={style.head}>
      <input
        type="text" placeholder="Enter user name" required/>
      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        required
      />
      <br /><br />

      <button type="submit">
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </form>
  );
}
const style={
    head:{
 textAlign:'center',
 alignmentItem:'center',
 backgrounColor:'whitesmoke',
 height:'200px',
 border:'2px solid black',
 width:'300px',
 margin:'30px auto',
 borderRadius:'5px',
 boxShadow:'0px 1px 3px 2px black',

    }
}

export default Login;