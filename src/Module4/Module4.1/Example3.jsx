import React,{useState} from 'react'

function Example3(){
    const[state,setState]=useState({name:"Dhoni"})
    const handleChange=()=>{
        setState({name:"Rohit"})
    }
  return (
    <div>
      <h1>My name is {state.name}</h1>
      <h2>I am from Mumbai</h2>
      <button onClick={handleChange}>Change Name</button>
    </div>
  )
}

export default Example3