import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';

function Example1() {
    const[count,setCount]=useState(0);
    let previousValue=useRef()
    useEffect(()=>{
        previousValue.current=count
    },[count])
  return (
    <div>
      <h1>Previous value Storage</h1>
      <h2>Current value s:{count}</h2>
      <br />
      <h2>Previous value is :{previousValue.current}</h2>
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Example1
