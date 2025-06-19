import React from 'react'
//import image from './react.png'
export default function HeroSection() {
  return (
    
    <section className='bg-center bg-no-repeat h-screen flex  
     bg-sky-500'>


          <div className='w-full p-5 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col
           justify-between items-center  border-4' >

            <div className='text-center sm:text-left lg:text-left md:text-left   bg-pink-500 border-5  '>

            <h1 className='xl:text-12xl lg:text-9xl md:text-8xl sm:text-6xl text-6xl s font-bold'>Software</h1>
            <h1 className='xl:text-12xl lg:text-9xl md:text-8xl sm:text-6xl text-6xl font-bold'>Developer</h1>

            </div> 
             <div className='text-center sm:text-left lg:text-left md:text-left  bg-pink-500 border-5  '>

            <h1 className='xl:text-12xl lg:text-9xl md:text-8xl sm:text-6xl text-6xl s font-bold'>Software</h1>
            <h1 className='xl:text-12xl lg:text-9xl md:text-8xl sm:text-6xl text-6xl font-bold'>Developer</h1>

            </div> 
            
          </div>
    

    </section>
 

  
  )
}
