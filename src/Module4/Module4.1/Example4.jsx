import React, { useState } from 'react';

function Example4() {
  const [state, setState] = useState({
    name: "Dhoni",
    age: 47,
    city: "Bengaluru"
  });

  const handleChange = () => {
    setState((prevState) =>
      prevState.name === "Dhoni"
        ? { name: "Rohit", age: 38, city: "Mumbai" }
        : { name: "Dhoni", age: 47, city: "Bengaluru" }
    );
  };

  return (
    <div>
      <h1>My name is {state.name}</h1>
      <h2>Age: {state.age}</h2>
      <h2>I am from {state.city}</h2>

      <button onClick={handleChange}>
        Change Details
      </button>
    </div>
  );
}

export default Example4;