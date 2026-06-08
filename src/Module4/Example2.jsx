import React from 'react'

function Example2({name,age,city,isStudent}) {
    var name="Bharath";
    var age=21;
    var city="Bengaluru";
  return (
    <div>
       <h1>My name is {name}</h1>
      <p>I am {age} year old</p>
      <h2>I am from {city}</h2>
      <h3>{isStudent ? " i am Student" : "not a Student"}</h3>
    </div>
  )
}

export default Example2
