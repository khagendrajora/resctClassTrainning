import React from 'react'

const Props = (props) => {
    const {language ,technology}=props
  return (
    <>
    <h2 className='text-muted'>We are learning {language} . It is mainly used for {technology} </h2>
    </>
  )
}

export default Props