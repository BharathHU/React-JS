import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h2>This is a Child</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
    </div>
  )
}

export default Child