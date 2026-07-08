import React from 'react'

function Child({content,change,reset}) {
  return (
    <div style={{border:'3px solid brown',height:'200px' ,width:'300px',borderRadius:'5px',boxShadow:'0px 0px 10px green'}}>
      <div style={{margin:'20px 20px'}}>
        <h1>Child Component</h1>
      <h3 style={{color:'red'}}>{content}</h3>
      <button onClick={change} onMouseLeave={reset} style={{backgroundColor:'blue',color:'white',width:'100px',height:'40px' ,borderRadius:'10px',fontSize:'20px',textDecoration:'none'}}>Click me</button>
      </div>
    </div>
  )
}

export default Child
