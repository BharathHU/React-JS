import React from 'react'
import {useState} from 'react'
import './ex1.css'

const State = () => {

    const[state, setState] = useState(100)
    const[name, setName] = useState("virat");
    const[isplaced, setplaced]= useState(false);

    const[count, setCount]= useState(0);

    let change=()=>{
        setCount(()=>count+1);
    }
  return (
    <div>
        <h1>{state}</h1>
        <h3>My name is {name}</h3>

        <p></p>

        <h2> count: {count}</h2>
        <button onClick={change}>click me</button>


    </div>
  )
}

export default State