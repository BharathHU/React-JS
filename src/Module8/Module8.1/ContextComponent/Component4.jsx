import React, { useContext } from 'react'
import { contextData } from './Component1'

function Component4() {
  const data = useContext(contextData)

  return (
    <div
      style={{
        height: '300px',
        width: '400px',
        boxShadow: '0px 0px 10px black',
      }}
    >
      <h1>Component4</h1>
      <h6>{data?.[0]}</h6>
      <img
        src={data?.[1]}
        alt="car"
        style={{ width: '100%', height: '70%', objectFit: 'cover' }}
      />
    </div>
  )
}

export default Component4

