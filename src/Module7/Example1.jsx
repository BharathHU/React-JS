// 
import React from 'react'

function Example1() {
    let cars=['Benz','BMW','Audi','Range Rover']
    cars.push('jaguar')
    cars.push('Rolles Royes')
    cars.unshift('jaguar')
  return (
    <div>
      <h1>Ordered List</h1>
      <ol>
        {cars.map((ele,index)=>{
            return <li>{ele}</li>
        })}
      </ol>
    </div>
  )
}

export default Example1
