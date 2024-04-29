import React from 'react'
import { children } from 'react'

const BlogH3 = ({children,className}) => {
  return (
    <>
    <h3 className={`text-2xl text-white font-semibold ${className}`}>
        {children}
    </h3>
    </>
  )
}

export default BlogH3