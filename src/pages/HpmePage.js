import React from 'react'
import Carousel from '../component/Carousel'
import Card from '../component/Card'

import Navbar from '../component/Navbar'

import './style.css'
import Signup from './Signup'


const HpmePage = () => {
  return (
    <>
   <Navbar/>
   <Carousel/>
   <Card/>
   
   <Signup/>
    </>
  )
}

export default HpmePage