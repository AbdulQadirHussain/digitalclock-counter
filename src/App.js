import React, { useState } from 'react'



// WITHOUT HOOK ITS UNABLE TO INCREMENT NUMBER ON FE 
// let count = 0;
// const incNum = () => {
//   count++;
//   console.log('clicked ' + count)
// }



const App = () => {

  let stateHook = useState();
  console.log(stateHook);
  const [curCount, setCount] = useState(0);
  
const incNum = () => {
  setCount(curCount + 1);
  console.log('clicked ' + curCount)
}

  return (
    <>
     <h1> {curCount} </h1>
     <button onClick={incNum}> Click Here</button> 
    </>
  )
}

export default App






// Destructuring
// const name = ['vi', 'di', 'ci'];
// const [v,d,c] = name;
// console.log(c);