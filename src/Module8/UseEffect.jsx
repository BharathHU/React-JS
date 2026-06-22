import React, { useEffect } from 'react';

function UseEffect() {
  useEffect(() => {
    // Side effect code here

    return () => {
      // Cleanup code here (optional)
    };
  }, []); // Dependency array

  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default UseEffect;