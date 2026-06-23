import React from 'react'
import { useState } from 'react';

function TryExpect() {
     const[count,setCount]=useState(0);
    const Increase=()=>{ 
    setCount(count+1)
    }
    const Decrease=()=>{
        if (count>0){
        setCount(count-1)
        }
    }
  return (
    <div>
        <h1>Chaluva Eat Food :{count} time's</h1>
      <button onClick={Increase} >Chaluva</button>
      <h1>Chaluva  Maddha:{count}</h1>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default TryExpect
