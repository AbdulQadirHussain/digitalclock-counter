import React, { useState } from 'react'

const Counter = () => {
  const [currentCount, setCount] = useState(0);
  
  const Increment = () => {
    setCount(currentCount +1)
  }

  return (
    <>
     <h1> {currentCount} </h1>
     <button onClick={Increment}> Click here </button>
    </>
  )
}

export default Counter