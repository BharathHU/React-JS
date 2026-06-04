// import Example1 from './Module1/Example1'
// import Example2 from './Module1/Example2'
// import Example3 from './Module1/Example3'
// 

import React from 'react'
// import Example6 from './Module2/Example6'
// import Inline from './Module2/Inline'
// import Inlinevari from './Module2/Inlinevari'
// import InlineObj from './Module2/InlineObj'
// import Greet from './Module3/components/Greet'
// import Greet1 from './Module3/components/Greet1'
import Header from './Module3/component2/Header'
import Aside from './Module3/component2/Aside'
import Main from './Module3/component2/Main'
import Footer from './Module3/component2/Footer'
import Card from './Module3/component1/Card'
import Greet from './Module3/component2/Greet'
function App() {
  return (
    <div>
      {/* <Example6/> <br /> <br />
      <Inline/> <br /> */}
      {/* <Inlinevari/> 
      <InlineObj/> */}
      {/* <Greet/>
       <Greet/>
        <Greet/>
         <Greet/>
          <Greet/>
           <Greet1/> */}
           <Header/>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Aside/>
           <Main/>
             </div>
           <Footer/> <br ></br>
           <Card/>
          <Greet/>
           <Greet/>
            <Greet/>
    </div>
  )
}

export default App
