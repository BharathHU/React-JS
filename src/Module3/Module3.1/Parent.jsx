import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
      <h1 style={{textAlign:'center',alignItems:'center'}}>This is a Parent</h1>
      <Child/>
      <Child/>
      <Child/>
    </div>
  )
}

export default Parent
