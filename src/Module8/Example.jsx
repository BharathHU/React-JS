import React from 'react'
import { useState } from 'react'

function Example() {
    const[state,setState]=useState(100)
    const[name,setName]=useState('Raj')
    const[isplaced,setIsPlaced]=useState(true)
    const[data,setData]=useState({name:'sachin',age:21})
    const[arr,setArr]=useState(100,200,300,400)
    const[imgurl,setImageurl]=useState("")
  return (
    <div>
      <h1>{state}</h1>
      <h1>My name is {name}</h1>
      {isplaced ?<p>Yes</p> : <p>No</p>}
      <h4>My name is {data.name} i am {data.age} Year old</h4>
      <img src="{imageurl}" alt="noimage" />
    </div>
  )
}

export default Example
