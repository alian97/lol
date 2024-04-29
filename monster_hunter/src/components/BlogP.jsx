import React from 'react'
import { children } from 'react'

const BlogP = ({children, className}) => {
  return (
    <>
    <p className={`w-72 text-justify text-white pb-10 ${className}`}>
        {children}
    </p>
    </>
  )
}

export default BlogP