import React, { useState } from 'react';

const Counter = () => {
  const [num, setNum] = useState(0);
  
  const IncrementNum = () => {
    console.log("clicked")
    setNum(num + 1)
  } 

  return (
    <>
    <h1> {num} </h1>
    <button onClick={IncrementNum}> Click </button>
    </>
  ) 
}

export default Counter