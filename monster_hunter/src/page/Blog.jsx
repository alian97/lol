import React from 'react'
import Container from '../components/Container'
import Menu from '../components/Menu'
import Image from '../components/Image'
import BlogP from '../components/BlogP'
import BlogH3 from '../components/BlogH3'

const Blog = () => {
  return (
    <>
    <section id='blog' className='bg-gradient-to-t from-[#0c200f] to-[#274068] '>
        <Container>
        {/* main blog start */}
        <div className="blog_main pb-24 flex justify-between">
          
          {/* banner imeage start */}
          <div className="blog_main__blogImg ">
            <Image imgSrc='blog.png' className='w-1/2 sticky  pt-12'/>
          </div>
          {/* banner imeage end */}

          {/* ======================================================================= */}
        
        {/* blog_main__text_box start */}
        <div className="blog_main__text_box w-1/2">
          <h2 className='text-4xl font-bold text-white  pb-10'>History of Our Hunt</h2>

          <div className="blog_main__text_box__inner max-w-[630px] flex justify-between">
            {/* blog_main__text_box__inner__items start 01*/}
          <div className="blog_main__text_box__inner__items">
            <BlogH3 className='text-2xl text-white font-semibold'>Griffin</BlogH3>
            <Image imgSrc='blog_02.png' className='py-5'/>
            <BlogP className='w-72 text-justify text-white'>The griffin, griffon, or gryphon is a legendary creature with the body, tail, and back legs of a lion, and the head and wings of an eagle with its talons on the front legs.</BlogP>
          </div>
          {/* blog_main__text_box__inner__items end 01*/}
          
            {/* blog_main__text_box__inner__items start 02*/}
          <div className="blog_main__text_box__inner__items">
            <BlogH3 className='text-2xl text-white font-semibold'>The Lernaean Hydra</BlogH3>
            <Image imgSrc='blog_03.png' className='py-5'/>
            <BlogP className='w-72 text-justify text-white'>The Lernaean Hydra or Hydra of Lerna more often known simply as the Hydra, is a serpentine water monster in Greek mythology and Roman mythology.</BlogP>
          </div>
          {/* blog_main__text_box__inner__items end 02*/}

          </div>

          <div className="blog_main__text_box__inner max-w-[630px]  flex justify-between">
            {/* blog_main__text_box__inner__items start */}
          <div className="blog_main__text_box__inner__items">
            <BlogH3 className='text-2xl text-white font-semibold'>Phoenix</BlogH3>
            <Image imgSrc='blog_04.png' className='py-5'/>
            <BlogP className='w-72 text-justify text-white'>The phoenix is an immortal bird that cyclically regenerates or is otherwise born again. While it is part of Greek mythology, it has analogs in many cultures, such as Egyptian and Persian. Associated with the sun, a phoenix obtains new life by rising from the ashes of its predecessor.</BlogP>
          </div>
          {/* blog_main__text_box__inner__items end */}
          
            {/* blog_main__text_box__inner__items start */}
          <div className="blog_main__text_box__inner__items">
            <BlogH3 className='text-2xl text-white font-semibold'>Mermaids</BlogH3>
            <Image imgSrc='blog_05.png' className='py-5'/>
            <BlogP className='w-72 text-justify text-white'>These mermaids aren't from the Saturday mornin' cartoons, mate. Sailors call 'em sea ghouls or devil fish. Dreadful in hunger for flesh of man. Best cling to your soul, old son, as mermaids be given to take the rest, to the bone. But look on the sunny side up o' things! Depends on how well ya treat 'em!</BlogP>
          </div>
          {/* blog_main__text_box__inner__items end */}

          </div>

          <div className="blog_main__text_box__inner max-w-[630px] flex justify-between">
            {/* blog_main__text_box__inner__items start */}
          <div className="blog_main__text_box__inner__items ">
            <BlogH3 className='text-2xl text-white font-semibold'>Harpi</BlogH3>
            <Image imgSrc='blog_06.png' className='py-5'/>
            <BlogP className='w-72 text-justify text-white'>Half-human and half-bird personification of storm winds from Greek and Roman mythology generally depicted as birds with the heads of maidens
In Greek and Roman mythology, a harpy is a half-human and half-bird, often believed to be a personification of storm winds. They feature in Homeric poems.</BlogP>
          </div>
          {/* blog_main__text_box__inner__items end */}
          
            {/* blog_main__text_box__inner__items start */}
          <div className="blog_main__text_box__inner__items">
            <BlogH3 className='text-2xl text-white font-semibold'>Ice Dragon</BlogH3>
            <Image imgSrc='blog_07.png' className='py-5'/>
            <BlogP className='w-72 text-justify text-white'>The Ice Dragon is a children's fantasy novelette by George R. R. Martin, originally published in 1980 in the Ace Books anthology Dragons of Light, as illustrated by Alicia Austin. It was later included in Martin's 1987 collection Portraits of His Children, as illustrated by Val Lakey Lindahn and Ron Lindahn.</BlogP>
          </div>
          {/* blog_main__text_box__inner__items end */}

          </div>

          <div className="blog_main__text_box__inner max-w-[630px] flex justify-between">
            {/* blog_main__text_box__inner__items start */}
          <div className="blog_main__text_box__inner__items">
            <BlogH3 className='text-2xl text-white font-semibold'>Dalki</BlogH3>
            <Image imgSrc='blog_08.png' className='py-5'/>
            <BlogP className='w-72 text-justify text-white'>Dalki is a race which is created by Jim Eno together with Logan's parent as a blood substitute by mixing demon tier dragon beast's and human's DNA.</BlogP>
          </div>
          {/* blog_main__text_box__inner__items end */}
          
            {/* blog_main__text_box__inner__items start */}
          <div className="blog_main__text_box__inner__items">
            <BlogH3 className='text-2xl text-white font-semibold'>Fire Demons</BlogH3>
            <Image imgSrc='blog_09.png' className='py-5'/>
            <BlogP className='w-72 text-justify text-white'>Fire Demons are choleric Pit Demons with the elemental property of fire. They are often depicted wielding a flaming sword and a whip. </BlogP>
          </div>
          {/* blog_main__text_box__inner__items end */}

          </div>

        </div>
        {/* blog_main__text_box end */}

        </div>
        {/* main blog end */}


            <Menu/>
        </Container>
    </section>
    </>
  )
}

export default Blog