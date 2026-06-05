import React from 'react'

function Greet({ name, subject }) {
  return (
    <div>
      <h1>Welcome to {subject ?? 'React'} class</h1>
      <p>My name is {name ?? 'Guest'}</p>
    </div>
  )
}


export default Greet
