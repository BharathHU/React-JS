import React from 'react'

function Example1({condition}) {
    if(condition){
        return <h1>Welcome user you loggedIn Successfully</h1>
    }
    else{
        return <h1>Please Check with username or password</h1>
    }
  return (
    <div>
      
    </div>
  )
}
 const style={
  back:{
    backgroundColor:"blue",
    color:"white",
    boxShadow:"0px 3px 5px 3px black",
    height:"200px",
    width:'200px',
    textAlign:'center',
     margin:'60px auto',
  },

    head:{
      textAlign:'center',
      alignmentItem:'center',

  }
}

export default Example1
