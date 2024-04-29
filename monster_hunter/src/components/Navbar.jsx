import React, { useEffect, useState } from 'react'
import Container from './Container'
import Image from './Image'

const Navbar = () => {
  let [top,setTop]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if (window.scrollY > 100) {
        setTop(true)
      }else{
        setTop(false)
      }
    })
  },[])
  return (
    <>
    <nav className={`w-full fixed top-16 z-20  ${top?"bg-black/40":"bg-transparent"}`}>
      <Container>
      <div className="menu flex justify-between items-center">
          {/* log star */}
          <div className="menu__logo">
              <Image className='w-40' imgSrc='logo.png'/>
          </div>
          {/* log end */}

{/* ================================================== */}

          {/* sign in start */}
          <div className="menu__nav_right">
             <button className='w-24 bg-white mr-4 py-1 hover:text-red-700 hover:font-black font-newFont'>
              Sign In
             </button>

             <button className='w-24 bg-white py-1 hover:text-red-700 hover:font-black'>
              Sign Up
             </button>
          </div>
          {/* sign in end */}
      </div>
      </Container>
  </nav>
    </>
  )
}

export default Navbar