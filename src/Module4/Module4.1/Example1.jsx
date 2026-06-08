import React, { useState } from 'react';
import './ex1.css'

function Example1() {
  const [state, setState] = useState(100);
  const [name, setName] = useState("Bharath");
  const [data, setData] = useState({ name: "raj", age: 22 });
  const [num, setNum] = useState([100, 200, 300, 400]);
  const [image, setImage] = useState(
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouettes-of-hawaiian-palms-at-a-gorgeous-sunset-free-image.jpeg?w=600&quality=80"
  );

  return (
    <div className='div'>
      <h1>{state}</h1>

      <h3>My name is {name}</h3>

      <h3>
        Object Data: {data.name} - {data.age}
      </h3>

      <h3>The array value is {num[2]}</h3>

      <img
        src={image}
        alt="No Image"
        height="100px"
        width="200px"
      />
    </div>
  );
}

export default Example1;