import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP} from '@gsap/react'
import { heroVideo , smallHeroVideo } from '../utils'

function Hero() {
  const [Videosrc , setVideosrc] = useState(window.innerWidth < 700 ? smallHeroVideo :heroVideo )

  useGSAP(() => {
    gsap.to("#Hero" , {opacity:1, delay:2})

    gsap.to("#cta" , {opacity:1 , translate: "0px -130px" ,delay:2})
  } , [])

    const handlesetvideosrc = () => {
      if(window.innerWidth < 700 ){
        setVideosrc(smallHeroVideo)
      }else{
        setVideosrc(heroVideo)
      }
    }

    useEffect(() =>{
      window.addEventListener('resize' , handlesetvideosrc);

      return () => {
        window.removeEventListener('resize' , handlesetvideosrc)
      }

    } , [])


  return (
    <section className='w-full nav-height bg-black reletive'>
      <div className='h-5/6 flex-center w-full flex-col'>
        <p id='Hero' className='hero-title'>Tushar Thanvi's web clone of </p>
        <p id='Hero' className='hero-title'>Front-End App</p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline={true} key={Videosrc} className='pointer-events-none'>
            <source src={Videosrc} type='video/mp4'/>
          </video>
        </div>
        
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20 '>
        <a href='#highlighets' className='btn' > Buy</a>
        <p className='font-normal text-xl'> From $199/month or $999</p>

      </div>
      
    </section>
  )
}

export default Hero
