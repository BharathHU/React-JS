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

export default Example1
