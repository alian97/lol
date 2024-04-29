import React from 'react'
import Ul from '../components/Ul'
import Li from '../components/Li'
import Container from './Container'

const Menu = () => {
  return (
    <>
    <Container className='relative'>
    <Ul className='text-white fixed  right-[8%] top-[40%] text-right text-2xl'>
        <Li link='#home'>HOME</Li>
        <Li link='#about'>ABOUT US</Li>
        <Li link='#blog'>BLOG</Li>
        <Li link='#'>INFO</Li>
        <Li link='#'>CONTACT</Li>
    </Ul>
    </Container>
    </>
  )
}

export default Menu