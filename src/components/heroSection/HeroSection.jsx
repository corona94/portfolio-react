import React from 'react'
//import image from './react.png'
export default function HeroSection() {
  return (
    
    <section className='bg-center bg-no-repeat h-screen flex items-center 
    text-center bg-sky-500 items-center justify-center'>

      <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10'> {/*Div pather and smartphones */}

        <div>
          {/*Div son for text */}
          <h1 className='md:text-left lg:text-left text-left lg:text-8xl md:text-8xl text-6xl text-white font-bold'>Software ++</h1>
          <h1 className='lg:text-8xl md:text-8xl text-6xl text-white font-bold'>Development</h1>

        </div>

<img
  src="blob:https://carbon.now.sh/4079889b-7996-4f77-8ded-21e91a7347fb"
  alt="Software developer illustration"
  className="w-64 mx-auto rounded-2xl"
/>
      {/*Div son for the image */}
      {/*<div>
          

          <img src={image} alt="Software" className='w-64 md:w-96 lg:w-[500px]'/>


        </div>*/}  

      </div>

    </section>
 

  
  )
}
