import React, { useContext } from 'react'
import { ContextTheme } from '../context/ThemeContext'
function ProductCard({image,title,price}) {
  const{isDarkMode,toogleTheme}=useContext(ContextTheme)
  return (
    <div style={{
        width:"250px",
        padding:"20px",
        borderRadius:"10px",
        backgroundColor:isDarkMode?"black":"white",
        color:isDarkMode?"white":"black",
        boxShadow:"0px 0px 10px black",
        textAlign:"center",
        margin:"20px"
    }}>
        <img src={image}
        alt="No image" style={{
          width:"100%",height:"200px",
          objectFit:"cover",borderRadius:"10px"
        }}/>
        <h2>{title}</h2>

        <h3>₹ {price}</h3>
        <button style={{
          padding:"10px",
          width:"100%",
          backgroundColor:"blue",
          color:"white",
          cursor:"pointer",
          border:"none",
          borderRadius:"5px"
        }}
        >Buy Now</button>
      
    </div>
  )
}

export default ProductCard