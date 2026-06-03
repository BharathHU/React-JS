import React from 'react'

function InlineObj() {
  return (
    <div>
      <h2 style={Style.heading}><i>Welcome</i></h2>
    </div>
  )
}
let Style={
    heading:{
        color:'whitesmoke',
        fontSize:'30px',
        textShadow:'2px 2px 5px red'
    }
}
export default InlineObj
