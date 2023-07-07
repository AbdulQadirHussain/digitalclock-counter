import React, { useState } from 'react'

const IncDecCounter = () => {
    
    const [num, setNum] = useState(0);

    const increment = () => {
        console.log('clicked');
        setNum(num+1);
    }

    const decrement = () => {
        if(num > 0){
        setNum(num-1);
        }
        else{
            setNum(0);
            alert('Limit Reached')
        }
    }

    return (
    <>
    <div className='main-div'>
        <div className='center-div'>
            <h1 className='count'> {num} </h1>
            <div className='btn-div'>
            <button className='incre' onClick={increment}> Increment </button>
            <button className='decre' onClick={decrement}> Decrement </button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default IncDecCounter
