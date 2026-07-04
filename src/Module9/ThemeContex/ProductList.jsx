import { useContext, useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import { ContextTheme } from "../context/ThemeContext";

function ProductList() {
    const[Products,setProducts]=useState([])
    const{isDarkMode,toogleTheme}=useContext(ContextTheme)
    console.log(Products)
    useEffect(()=>{
    //     // Dummy Product Data
    // const productData = [
    //   {
    //     id: 1,
    //     title: "iPhone 15",
    //     price: 80000,
    //     image:
    //       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    //   },

    //   {
    //     id: 2,
    //     title: "Laptop",
    //     price: 65000,
    //     image:
    //       "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    //   },

    //   {
    //     id: 3,
    //     title: "Headphones",
    //     price: 5000,
    //     image:
    //       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    //   },

    //   {
    //     id: 4,
    //     title: "Smart Watch",
    //     price: 7000,
    //     image:
    //       "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    //   },
    // ];
         let fetchData=async()=>{
           try{
           let response= await fetch('https://fakestoreapi.com/products')
                let res=await  response.json()   
                //  console.log(res)
                setProducts(res)
                
        }
           catch(error){
            console.log("error while fecthing")
           }
       }
       fetchData()

    },[])
  return (
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        marginTop:"20px",
        backgroundColor:isDarkMode?"black":"white"
    }}>
      {Products.map((product)=>{
        return(
            <ProductCard key={product.id}
            image={product.image}
            title={product.title.substring(0,20)}
            price={product.price*95}
            />
        )
      })}
    </div>
  )
}

export default ProductList