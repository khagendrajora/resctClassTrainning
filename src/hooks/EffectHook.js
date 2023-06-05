import React, { useState, useEffect } from 'react'

const EffectHook = () => {
  const [number, setNumber] = useState(1)
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert('this is a effect using useEffest')
  }, [count])
  return (
    <>
      <h2>{number}</h2>
      <button className='btn col-1 btn-primary' onClick={() => setNumber(number + 1)}>Increase value</button>

      <h2>{count}</h2>
      <button className='btn col-1 btn-danger' onClick={() => setCount(count + 2)}>Increase</button>
    </>
  )
}

export default EffectHook