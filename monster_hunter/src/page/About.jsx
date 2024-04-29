import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Menu from '../components/Menu'

const About = () => {
  return (
    <>
    <section id='about' className='bg-gradient-to-b from-black to-[#274068] pb-[10px] clip-path: polygon(100% 0, 100% 97%, 50% 100%, 0 92%, 0% 0%);'>
        
    <Container>
    {/* about_main start */}
    <div className="about_main w-full relative pb-[100px]">
       <Image imgSrc='about_01.png ' className='sticky top-[0] left-10 z-10 '/>
        
       {/* about_main__text start */}
       <div className="about_main__text w-[590px] ml-[510px]  pt-[120px] ">
        <p className='text-white text-5xl pb-5'>About Us</p>
        <p className='text-white text-justify'>Shadow the S Rank Hunter Guild, a beacon of unparalleled prowess and unity, boasts a roster of just 18 elite hunters, each a titan in their own right. Among them, shadows bend to the will of one, while another commands a legion of spectral warriors. Black lightning crackles at the command of yet another, while blood blades dance with deadly precision in the hands of another still. Their abilities span the spectrum of the supernatural, from the chilling cold flame to the mystic art of teleportation and the intricate control of clouds.  </p>
       </div>
       {/* about_main__text end */}
        

       {/* about_main__img6 start  */}
       <div className="about_main__contain w-[500px] absolute right-40 top-[410px] flex justify-between ">
        <p className='text-3xl text-white absolute right-[10px] bottom-[125px] '>Our Hunters</p>
        <div className="about_main__contain__img w-[500px] flex flex-wrap justify-between">
          <Image className='w-[160px]' imgSrc='about_02.png'/>
          <Image className='w-[160px]' imgSrc='about_03.png'/>
          <Image className='w-[160px]' imgSrc='about_04.png'/>
        </div>
        
       </div>
       
       <div className="about_main__img6 w-[840px] absolute right-40 top-[530px] flex flex-wrap justify-between gap-y-3">
        <Image className='w-[160px]' imgSrc='about_05.png'/>
        <Image className='w-[160px]' imgSrc='about_06.png'/>
        <Image className='w-[160px]' imgSrc='about_07.png'/>
        <Image className='w-[160px]' imgSrc='about_08.png'/>
        <Image className='w-[160px]' imgSrc='about_09.png'/>
        <Image className='w-[160px]' imgSrc='about_10.png'/>
        <Image className='w-[160px]' imgSrc='about_11.png'/>
        <Image className='w-[160px]' imgSrc='about_12.png'/>
        <Image className='w-[160px]' imgSrc='about_13.png'/>
        <Image className='w-[160px]' imgSrc='about_14.png'/>
       </div>

       {/* about_main__text start 02*/}
       <div className="about_main__text w-[600px] ml-[510px]  pt-[50px]">
       <p className='text-white text-justify'>Together, they form an indomitable force, revered and feared across realms, known for their unyielding determination and mastery of the hunt. From mythical monsters to magickal beasts, and even the darkest denizens of the sea, they fearlessly embark on quests that take them to the farthest reaches of existence. Through the depths of unknown realms and the expanses of the multiverse, they tread where few dare to venture, driven by an insatiable thirst for adventure and the unwavering pursuit of justice.<br/><br/>
       <div className="about_main__contain__img w-[500px] flex flex-wrap justify-between">
        <Image className='w-[160px]' imgSrc='about_15.png'/>
        <Image className='w-[160px]' imgSrc='about_16.png'/>
        <Image className='w-[160px]' imgSrc='about_17.png'/>
       </div>
With each conquest, their legend grows, their tales echoing through the annals of history as they leave a trail of vanquished foes in their wake. Yet, amidst the chaos of battle and the thrill of victory, they remain bound by a solemn oath—to protect the innocent, uphold the balance of the cosmos, and safeguard the fragile threads of existence itself.<br/><br/>
        <div className="about_main__contain__img w-[500px] flex flex-wrap justify-between">
        <Image className='w-[160px]' imgSrc='about_18.png'/>
        <Image className='w-[160px]' imgSrc='about_19.png'/>
        <Image className='w-[160px]' imgSrc='about_20.png'/>
        </div>
For the S Rank Hunter Guild, the hunt is not merely a profession—it is a way of life, a calling that transcends the boundaries of time and space. And as long as there are monsters to be vanquished and worlds to be saved, they will stand vigilant, ever ready to answer the call of duty and face whatever challenges lie ahead.</p>
       </div>
       {/* about_main__text end 02*/}

       {/* about_main__img6end  */}
    </div>
    {/* about_main end */}
    <Menu/>
    </Container>
    </section>
    </>
  )
}

export default About