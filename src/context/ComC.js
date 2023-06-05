import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const ComC = () => {
    const data=useContext(GlobalContext)
  return (
    <>
    <h1>We are learning {data}.</h1>
   </>
  )
}

export default ComC