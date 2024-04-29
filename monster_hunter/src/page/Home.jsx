import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Ul from '../components/Ul'
import Li from '../components/Li'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <>
      <section id='home' className=' h-screen bg-gradient-to-b from-[#274068] to-black  top-0 left-0  overflow-hidden leading-0' >
        
        <Container className=''>
        {/* immage start */}
        <Image imgSrc='home_01.png' className='h-screen absolute right-[20%] bottom-0'/>
        {/* immage end */}

        {/* all text start */}
        <div className='text__div pt-[15%]'>
          <p className='text-white text-5xl'><span className='font-Architects-Daughter, text-yellow-500 text-[90px] font-caveat'>S</span> Rank Guild</p>
          <p className='text-white text-3xl pt-6'>Guild Type [Shadow] </p>
          <p className='text-white text-3xl pt-3'>Guild Name : Code Blonde</p>
          <p className='text-white w-[600px] text-lg text-justify pt-6'>Στον κόσμο του Hunter x Hunter, δεν υπάρχει ρητή ταξινόμηση "S rank" για Hunters. Ωστόσο, υπάρχουν Κυνηγοί που είναι εξαιρετικά ικανοί και φημισμένοι για τις ικανότητές τους. Αυτά τα άτομα αναφέρονται συχνά ως "Κορυφαίοι Κυνηγοί" ή απλά "Ελίτ Κυνηγοί" στη σειρά</p>
        </div>
        {/* all text end */}
        
      

      {/* ======================== this is right start ======================= */}
       <Menu/>
      {/* ======================== this is right end ======================= */}


       
        </Container>

       

        

      </section>
    </>
  )
}

export default Home