import React, { useState } from 'react'

const Events = () => {
  let yellow = "yellow";
  const [bg, setBg] = useState(yellow);

  let buttonName = "Click Here"
  const [name, setName] = useState(buttonName);


  const changeBackgroundColor = () => {
    let lightGreen = "lightgreen";
    setBg(lightGreen);
    let buttonNameChange = 'Hurrah!';
    setName(buttonNameChange);
  }

  const backToOldBackground = () => {
    setBg(yellow);
    setName(buttonName);
  }
  return (
    <>
     <div className='events' style={{backgroundColor: bg}}>
      <button className="events" onClick={changeBackgroundColor} onMouseLeave={backToOldBackground}> {name} </button> 
     </div> 
    </>
  )
}

export default Events











// import React, { useState } from 'react'

// const Events = () => {

//     let yellow = 'yellow';
//     const [bg, setbg] = useState(yellow);
//     let buttonName = 'click me';
//     const [name, setName] = useState(buttonName);

//     const bgColorChange = () => {
//         // console.log('click');
//         let newBg = '#34495e';
//         setbg(newBg);
//         let newButtonName = 'hurrah!';
//         setName(newButtonName);
//     }

//     const bgBack = () => {
//       setbg(yellow);
//       setName(buttonName);
//     }

//   return (
//     <>
//     <div className='events' style={{backgroundColor: bg}}>
//         <button className='events' onClick={bgColorChange} onDoubleClick={bgBack}> {name} </button>
//         &nbsp;
//         <button className='events' onMouseEnter={bgColorChange} onMouseLeave={bgBack}> {name} </button>
//     </div>
//     </>
//   )
// }

// export default Events