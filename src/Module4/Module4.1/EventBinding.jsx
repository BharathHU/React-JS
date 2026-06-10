import React from 'react';

function EventBinding() {

  const handleClick = () => {
    alert("Button was clicked!!!");
    
  };

  return (
    <div style={{alignItems:'center', textAlign:'center', margin:'30px'}}>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default EventBinding;