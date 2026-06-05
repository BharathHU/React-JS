import React from 'react'
import Example2 from './Example2'

function Example1(props) {
    const{name,age,city,isStudent}=props
  return (
    <div>
      <h1>My name is {name}</h1>
      <p>I am {age} year old</p>
      <h2>I am from {city}</h2>
      <h3>{isStudent ? " i am Student" : "not a Student"}</h3>
   <Example2/>
    </div>
  )
}

export default Example1
