import React from 'react'

function Dark() {
    const[darkMode,setDarkMode]=useState(false);
    const toggleTheme=()=>setDarkMode(!darkMode);

    const themeStyle={
      backgroundColor:darkMode? 'white' : 'black',
      color:darkMode? 'black':'white',
      minHeight:'100vh',
      padding:'2px',
      transition:'all 0.3s ease-in-out',
    }
    const cardStyle={
      backgroundColor:darkMode? 'white':'black',
      color:darkMode ? 'black':'white',
      padding:'20px',
      maxWidth:'350px',
      

    }
    }
  return (
    <div>
      
    </div>
  )

export default Dark
