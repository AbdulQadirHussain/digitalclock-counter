import React, { useState } from 'react'

const DigitalAutomaticClock = () => {
    let nTime = new Date().toLocaleTimeString();
    const [cTime, setTime] = useState(nTime);
    
    const UTime = () => {
        nTime = new Date().toLocaleTimeString();
        setTime(nTime)
    }

    setInterval(UTime, 1000);

    return (
    <>
     <h1 className='updateAutomatically'> {cTime} </h1> 
    </>
  )
}

export default DigitalAutomaticClock