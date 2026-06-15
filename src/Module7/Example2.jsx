import React from 'react'

function Example2() {
    const bikes = [
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
  "https://images.unsplash.com/photo-1529429617124-aee711a5ac1c",
  "https://images.unsplash.com/photo-1517846693594-1567da72af75",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1558981403-c5f9891cdbc5",
  "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
  "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
  "https://images.unsplash.com/photo-1622185135505-2d7950039948",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
  "https://images.unsplash.com/photo-1611242320536-f12d3541249b"
];
  return (
    <div>
      <h1>Bike images</h1>
      <ul>
      {bikes.map((bike,index)=>{
       return <img key={index} src={bike} alt={`Bike ${index + 1}`} width="200px" height={'200px'} style={{display:'flex', justifyContent:'space-between'}}
        />

      })}
      </ul>
    </div>
  )
}

export default Example2
