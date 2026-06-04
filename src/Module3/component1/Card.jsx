import React from 'react'
import './card.css'

function Card() {
    let name='Bharath H U';
    let age='22';
  return (
<div className='card' >
    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouettes-of-hawaiian-palms-at-a-gorgeous-sunset-free-image.jpeg?w=600&quality=80" alt="" />
      <h2>Name:{name}</h2>
      <h2>Age:{age}</h2>
    </div>
  )
}

export default Card
