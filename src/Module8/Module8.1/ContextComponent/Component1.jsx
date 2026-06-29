import React, { createContext, useState } from 'react'
import Component2 from './Component2'


export const contextData=createContext()
function Component1() {
  const[content,setContent]=useState("Welcome to react js class")
  const [image,setImage]=useState('https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg')
  return (
    <div style={{height:"500px",width:"600px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component1</h1>
      <h4 style={{textAlign:"center"}}>{content}</h4>
  <contextData.Provider value={[content,image]}>
      <Component2 />
  </contextData.Provider>

    </div>
  )
}

export default Component1