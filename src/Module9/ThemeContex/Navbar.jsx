import React from 'react'
import { useContext } from 'react'
import { ContextTheme } from '../context/ThemeContext'
function Navbar() {
const {isDarkMode,toogleTheme}=useContext(ContextTheme)

  return (
    <div style={{backgroundColor:isDarkMode?"#222":"#fff",
        color:isDarkMode?"white":"black",padding:"20px",display:"flex",
        justifyContent:"space-between",alignItems:"center",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>🛒 Product Store</h1>
      <button onClick={toogleTheme}
       style={{
        padding:"10px 20px",border:"none",
        borderRadius:"5px",cursor:"pointer",
        backgroundColor:isDarkMode?"white":"black",
        color:isDarkMode?"black":"white"
      }}>{isDarkMode?"light Mode  🌞":"Dark Mode  🌜"}</button>
    </div>
  )
}

export default Navbar