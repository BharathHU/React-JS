import React, { createContext, useState } from 'react'

export const ContextTheme=createContext()

function ThemeContext({children}) {
    const[isDarkMode,setIsDarkMode]=useState(false)

    //toogleFunction
    let toogleTheme=()=>{
setIsDarkMode(!isDarkMode)
    }
  return (
    <div>
        <ContextTheme.Provider value={{isDarkMode,toogleTheme}}>
   {children}
        </ContextTheme.Provider>
   
    </div>
  )
}

export default ThemeContext