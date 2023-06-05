import React, { useState } from 'react'

const IncrementDecrement = () => {
  const [number, set] = useState(1)
  // here  number is a variable name whichhas initial value 0
  //setNumber ia a function which set the new value for the variable

  // const increase = ()=>(
  //     set(number+1)
  // )
  const decrease = () => (
    set(number - 2)
  )
  return (
    <>
      <h5>{number}</h5>
      {/* <button className='btn btn-primary' onClick={increase}>Increase value</button> */}

      <button className='btn col-1 btn-primary' onClick={() => set(number + 1)}>Increase value</button>
      &nbsp;&nbsp;
      {/* {number>1 && 
    <button className='btn btn-danger' onClick={decrease}>Decrease value</button>
    } */}
      <button className='btn btn-danger' onClick={() => (number > 1 ? set(number - 1) : '')}>Decrease value</button>
    </>
  )
}

export default IncrementDecrement