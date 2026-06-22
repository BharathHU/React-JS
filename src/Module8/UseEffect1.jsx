import React, { useEffect, useState } from 'react';

function UseEffect1() {
  const [count, setCount] = useState(0);

  const Increment = () => setCount((prev) => prev + 1);

  const Decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const Reset = () => setCount(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div style={styles.box}>
      <h1 style={styles.heading}>
        The count is : {count}
      </h1>

      <div style={styles.btnContainer}>
        <button style={{ ...styles.btn, backgroundColor: 'green' }} onClick={Increment}>
          Increment
        </button>

        <button style={{ ...styles.btn, backgroundColor: 'red' }} onClick={Decrement}>
          Decrement
        </button>

        <button style={{ ...styles.btn, backgroundColor: 'blue' }} onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  box: {
    width: '400px',
    padding: '20px',
    border: '3px solid black',
    borderRadius: '10px',
    boxShadow: '0 4px 10px gold',
    margin: '50px auto',
    background: 'rgb(173,176,238)',
    textAlign: 'center',
  },

  heading: {
    color: 'pink',
    textShadow: '1px 2px 3px gold',
    marginBottom: '30px',
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },

  btn: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default UseEffect1;