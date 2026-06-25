import React, {useState,useRef}from 'react'

function StopWatch() {
    const [time, setTime] = React.useState(0);
    const intervalRef = useRef();

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 100);
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }

  return (
    <div style={style.body}>
      <h1>Stop Watch</h1>
      <h3 style={{alignItems:'center', textAlign:'center'}}>{time}</h3>
      <div style={{alignItems:'center',textAlign:'center',display:'flex',justifyContent:'center',gap:'20px'}}>
      <button onClick={startTimer} >Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
    </div>
  )
}
const style={
    body:{
        height:'200px',
        width:'200px',
        backgroundColor:'Yellow',
        color:'black',
        testAlign:'center',
        alignmentItem:"center",
        borderRadius:'15px ',
    }

}

export default StopWatch