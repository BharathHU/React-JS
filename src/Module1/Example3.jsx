import React from 'react'

function Example3() {
    let content="Welcome to ReactJS class "
    let handelclick=()=>{
        alert("Welcome to ReactJS class")
    }
  return (
    <div>
      <h1>{content}
        <button onClick={handelclick}>Click Me</button>
      </h1>
    </div>
  )
}

export default Example3
