import React from 'react'

function Inlinevari() {
    let style={
        border:"5px solid black",
        backgroundColor:"whitesmoke"
    }
  return (
    <div>
      <h1>Inline CSS using variable</h1>
      <h1 style={style}>Welcome to React Class</h1>
      <h2 style={style1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde eos deleniti iste, cum quidem exercitationem est ab laboriosam dolores impedit, voluptatibus vero dolor rem corporis, commodi iure tempore mollitia!</h2>
    </div>
  )
}
let style1={
    color:'blue',
    fontSize:'30px'
    

}


export default Inlinevari
