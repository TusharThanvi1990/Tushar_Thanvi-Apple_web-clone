import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import Videocarousel from './Videocarousel'

function Highlighets() {
  useGSAP(() => {
    gsap.to('#title' , {opacity:1 , y:0})
    gsap.to('.link' , {opacity:1 , y:0 , duration:1 , stagger:0.25})
  } , [])


  return (
    <section id='highlighets' className='w-screen h-full overflow-hidden bg-zinc common-padding'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>Get the highlighets.</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the flim
              <img src={watchImg} alt="watch_img" className='ml-2'/>

            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt="Right" className='ml-2'/>

            </p>
          </div>
        </div>
      <Videocarousel />
      </div>

    </section>
      
    
  )
}

export default Highlighets
