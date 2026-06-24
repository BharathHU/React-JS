import React, { useState } from 'react';
import { useEffect } from 'react';
function Events() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev=> prev + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev=> prev - 1);
    }
  };
const Focus=()=>{
    console.log("cursore Focus")
}
const Submit=()=>{
    console.log("Form submitted")
}
const[massege,setMassege]=useState("");
useEffect(()=>{
    setMassege("Component Loaded Successfully!!!")
    
},[]);
  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>

      <button onMouseOver={decrease}>
        Decrease
      </button> <br /> <br />
      <label htmlFor="">Enter Input</label> <br />
      <input type="text" placeholder='Enter a text' required/>



      <form onSubmit={Submit}>
        <label htmlFor="" >Enter your name</label> <br />
        <input type="text" placeholder='Enter your name' required/> <br />
        <input type="mobile" placeholder='Enter Mobile number' required/> <br />
        <input type="otp" placeholder='Enter valid Otp' required/> <br />
        <input type="password" placeholder='Create Password' required /> <br />
        <button type='Submit'>Submit</button>
      </form>

<h2>{massege}</h2>
<div className='box' style={style.box}>box1</div>
    </div>
  );
}

export default Events;