import React from 'react'

function Navbar() {
  return (
    <div style={{ 
                height: '80px', 
                backgroundColor: 'white',
                boxShadow: '0px 0px 10px black',
                display: 'flex',
                padding: '0px 20px',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 'strong', 
                }}>
      
      <h2> Store Manager</h2>

        <button style={{
                        height: '40px',
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        marginRight: '20px',
                        cursor: 'pointer',
                      }}>
                        Dark Mode &#127769;
                    </button>
    </div>
  )
}

export default Navbar