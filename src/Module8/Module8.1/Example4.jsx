// import React from 'react'
// import { useState } from 'react'

// function Example4() {
//     const[state,setState]=useState('Welcome to React JS')
//     const Click=()=>{
//        setState("This is a React Class")
//     }
//     const Down=()=>{
//         setState("Welcome to React JS")
//     }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={Click} onMouseLeave={Down}>Click me</button>
//     </div>
//   )
// }

// export default Example4
// import React from 'react'
// import { useState } from 'react';

// function Example4() {
//     const[count,setCount]=useState(0);
//     const Increase=()=>{
//         setCount(count+1)
//     }
//     const Decrement=()=>{
//         if(count>0){
//             setCount(count-1)
//         }
   
//     }
//      const Reset=()=>{
//         setCount(0)
//     }
//     const image="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg";
//     const[img,setImage]=useState(image);
    
//     const onClick=()=>{
//         setImage("https://images.pexels.com/photos/6348018/pexels-photo-6348018.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-6348018.jpg&fm=jpg")
//     }
//     const Change=()=>{
//         setImage("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg")
//     }
    
//   return (
//     <div>
//         <h3>The count is: {count}</h3>
//       <button onClick={Increase}>Increase</button>
//       <button onClick={Decrement}>Decrease</button>
//       <button onClick={Reset}>Reset</button>
//       <br />
//       <img src={img} alt="Nature" width="300"/>
//       <button onClick={onClick} >Change Image</button>
//       <button onClick={Change}>Return old Image</button>
//     </div>
//   )
// }

// export default Example4

import React, { useState } from "react";
import "./Example4.css";

function Example4() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease-in-out",
  };

  const cardStyles = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "350px",
    margin: "0 auto",
    boxShadow: darkMode
      ? "0 0 10px rgba(255,255,255,0.1)"
      : "0 0 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={themeStyles}>
      <h1>🌙 Dark Mode / ☀️ Light Mode</h1>

      <button className="btn" onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙"}
      </button>

      <br />
      <br />

      <div style={cardStyles}>
        <h2>React useState Example</h2>
        <p>
          This card changes its background and text color based on the current
          theme using the <b>useState</b> hook.
        </p>
      </div>
    </div>
  );
}

export default Example4;
