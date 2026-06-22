import React, { useEffect, useState } from 'react'
import { BiBorderRadius } from 'react-icons/bi';

function UseEffect1() {
    const[count,setCount]=useState(0);
    const Increment=()=>{
        setCount((prev)=>prev+1)
    }
    const Decrement=()=>{
        if (count>0){
        setCount((prev)=>prev-1)
    }
}
const Reset=()=>{
    setCount(0)
}
useEffect(()=>{
    document.title=`Count is ${count}`;
},[count]);
  return (
    <div style={style.box}>
        <h1>The count is:{count}</h1>
        <div style={style.btn}>
      <button onClick={Increment} style={{backgroundColor:'green',color:'white'}}>Increment</button>
      <button onClick={Decrement} style={{backgroundColor:'red',color:'white'}}>Decrement</button>
      <button onClick={Reset} style={{background:'blue',color:'white'}}>Reset</button>
    </div>
    </div>
  )
}
const style={
    box:{
        height:'200px',
        width:'300px',
        border:'3px solid black',
        borderRadius:'5px ',
        boxShadow:'1px 1px 1px 1px gold',

    },
    btn:{
    display:'flex',
    justifyContent:'center',
    gap:'5px',

    }
}

export default UseEffect1
