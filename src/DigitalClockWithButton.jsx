import React, { useState } from 'react'

const DigitalClockWithButton = () => {
  let Time = new Date().toLocaleTimeString();

  const [curTime, setTime] = useState(Time);

  const updateTime = () => {
    Time = new Date().toLocaleTimeString();
    setTime(Time)
  }

  return (
    <>
     <h1>Digital Clock</h1>
     <h1 className='time'> {curTime} </h1>
     <div>
      <button onClick={updateTime}> Update Time </button> 
     </div> 
    </>
  )
}

export default DigitalClockWithButton
