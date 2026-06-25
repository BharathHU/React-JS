import React from 'react'
import { useState,useEffect,useRef } from 'react'

function CommonUsecase() {
    const inputRef=useRef (null)
return(

<input ref={inputRef}/> )

inputRef.current.focus()
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default CommonUsecase

