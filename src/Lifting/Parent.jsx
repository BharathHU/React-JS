import React,{useState} from 'react'
import Child from './Child'


function Parent() {
    const[content,setContent]=useState("Welcome to DCL")
    const Change=()=>{
        setContent("Thank you for visiting!!!")
    }
    const Reset=()=>{
        setContent("Welcome to DCL")
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <Child content={content} change={Change} reset={Reset}/>
    </div>
  )
}

export default Parent
