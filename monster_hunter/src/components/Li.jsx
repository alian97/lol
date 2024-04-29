import React from 'react'


const Li = ({className, children, link}) => {
  return (
    <>
    <li>
    <a className={`${className} hover:text-red-700`} href={link ? link : "#"}>
      
        {children}
    </a>
    </li>
    </>
  )
}

export default Li