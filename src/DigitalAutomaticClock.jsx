import React, { useState } from 'react'

const DigitalAutomaticClock = () => {
  
  let Time = new Date().toLocaleTimeString();
  
  const [curTime, setTime] = useState(Time);
  
  const updateTimeAutomatically = () => {
    Time = new Date().toLocaleTimeString();
    setTime(Time);
  }

    setInterval(updateTimeAutomatically, 1000);

  return (
    <>
     <h1 className='updateAutomatically'> {Time} </h1> 
    </>
  )
}

export default DigitalAutomaticClock