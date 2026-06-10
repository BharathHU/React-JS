import React, { useState } from 'react';

function Card() {
  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const style = {
    container: {
      backgroundColor: "lightblue",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      padding: "20px",
      border: "2px solid black",
      borderRadius: "10px",
      width: "300px",
      margin: "20px auto",
      boxShadow: '0px 1px 3px 1px black'
    },
  };

  return (
    <div style={style.container}>
      <h1>E-Cart</h1>

      <img
        src="https://imgs.search.brave.com/FlPUdZcnIqOX4B_mIyrxsos7KW2w7BzqIMbIcnYKTDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9rZnR6d2R5/YXV3dDkvM3FZUHZW/VFFQd3VWWjE3UUo1/TnVGTi9mYzUzNmRj/YTdlOWVlZDUzM2Ix/NWZmODg3YTI2M2Fj/Mi9BbmFzdHJvbmF1/dHJpZGluZ2Fob3Jz/ZWluYXBob3RvcmVh/bGlzdGljc3R5bGUy/LmpwZz93PTM4NDAm/cT05MCZmbT13ZWJw"
        alt=""
        height="200"
        width="200"
      />

      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
      <button onClick={reset}>Reset</button>

      <p>{count} Items are added</p>
    </div>
  );
}

export default Card;