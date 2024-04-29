import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({imgSrc, imgAlt, className, children}) => {
  return (
    <>
    

    <picture>
        <img src={imgSrc} alt={imgAlt} className={className} />
    </picture>
    {children}
    
    </>

    
  )
}

export default Image