import React from 'react'
import Component3 from './Component3'

function Component2() {
  return (
    <div>
      <div
        style={{ height: '600px', width: '700px', boxShadow: '0px 0px 10px black' }}
      >
        <h1>Component2</h1>
        <Component3 />
      </div>
    </div>
  )
}

export default Component2

