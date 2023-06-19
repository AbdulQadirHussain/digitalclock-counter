import React, { useState } from 'react'

const DigitalClockWithButton = () => {

  let newTime = new Date().toLocaleTimeString();

  const [curTime, setCurTime] = useState(newTime)
  
  const UpdateTime = () => {
    let newCurTime = new Date().toLocaleTimeString();
    setCurTime(newCurTime);
  }


  return (
    <>
     <h1> Digital Clock </h1>
     <h1 className='time'> {curTime} </h1>
     <div>
     <button onClick={UpdateTime}> Update Time </button>
     </div>
    </>
  )
}

export default DigitalClockWithButton