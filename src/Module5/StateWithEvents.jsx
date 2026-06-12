import React from 'react'
import { useState } from 'react'

function StateWithEvents() {
    const[text,setText]=useState('')
    let change=(e)=>{
        setText(e.target.value)
    }
    const[password,setPassword]=useState('')
    let change1=(e)=>{
        setPassword(e.target.value)

    }
  return (
    <div>
      <input type="text"  onChange={change}/>
      <p>Entered Text is :{text}</p>
      <input type="password" onChange={change1} />
      <p>Enterd Password is:{password}</p>
    </div>
  )
}

export default StateWithEvents
