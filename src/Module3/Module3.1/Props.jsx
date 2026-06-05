import React from 'react'
import Child from './Child'

const Props = () => {
    let name = "Bharath H U"
    let age = 21
    let address = "Bengaluru"

  return (
    <div>
      <h1>This is a Parent</h1>

      <Child name={name} age={age} address={address} />
    </div>
  )
}

export default Props