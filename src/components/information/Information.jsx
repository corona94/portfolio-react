import React from 'react'
import '../information/cards.css'

export default function Information() {
  return (

    
   
    <div className='container flex flex-col w-full items-center justify-center text-center'>

         <div className='text-center mb-6 justify-center justify-beteewn items-center flex w-full flex-wrap'>

            <h1 className='text-white text-6xl font-[900] m-6'>About me</h1>
            <p className=' text-gray-100 font-[300] text-4xl' >
                Soy ingeniero en computación con 6 años de experiencia en el área
                de IT la programación me ha acompañado a lo lador de mi carrera. 
            </p>

         </div>

         {/**Card Section */}

         <div className='flex justify-center text-center flex-wrap'>



            
                <div class="mr-5 ml-5 w-70  max-w-sm p-5 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                   
                         <svg  className='rect mb-8' aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="-2.5 -1 20 12">
                        <path   d="M 1.0867635,0.3059535 H 13.533815 c 0.432569,0 0.780811,0.4 0.780811,0.89687 v 7.741418 c 0,0.49687 -0.348242,0.89688 -0.780811,0.89688 H 1.0867635
                                            c -0.432569,0 -0.78081,-0.40001 -0.78081,-0.89688 v -7.741418 c 0,-0.49687 0.348241,-0.89687 0.78081,-0.89687 z"/>
                    </svg>
                    <a href="#">
                        <h5 class="mb-2 mt-0 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Responsive</h5>
                    </a>
                    <p class="mr-5 ml-5 mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    
                </div>




                 <div class="mr-5 ml-5  w-70 max-w-sm p-5 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                   
                         <svg  className='rect mb-8' aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="-2.5 -1 20 12">
                        <path   d="M 1.0867635,0.3059535 H 13.533815 c 0.432569,0 0.780811,0.4 0.780811,0.89687 v 7.741418 c 0,0.49687 -0.348242,0.89688 -0.780811,0.89688 H 1.0867635
                                            c -0.432569,0 -0.78081,-0.40001 -0.78081,-0.89688 v -7.741418 c 0,-0.49687 0.348241,-0.89687 0.78081,-0.89687 z"/>
                    </svg>
                    <a href="#">
                        <h5 class="mb-2 mt-0 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Desarrollo</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    
                </div>






                 <div class="mr-5 ml-5 w-70 max-w-sm p-5 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                   
                         <svg  className='rect mb-8' aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="-2.5 -1 20 12">
                        <path   d="M 1.0867635,0.3059535 H 13.533815 c 0.432569,0 0.780811,0.4 0.780811,0.89687 v 7.741418 c 0,0.49687 -0.348242,0.89688 -0.780811,0.89688 H 1.0867635
                                            c -0.432569,0 -0.78081,-0.40001 -0.78081,-0.89688 v -7.741418 c 0,-0.49687 0.348241,-0.89687 0.78081,-0.89687 z"/>
                    </svg>
                    <a href="#">
                        <h5 class="mb-2 mt-0 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Sistemas Administrativos</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    
                </div>






                <div class="mr-5 ml-5  w-70 max-w-sm p-5 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                   
                         <svg  className='rect mb-8' aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="-2.5 -1 20 12">
                        <path   d="M 1.0867635,0.3059535 H 13.533815 c 0.432569,0 0.780811,0.4 0.780811,0.89687 v 7.741418 c 0,0.49687 -0.348242,0.89688 -0.780811,0.89688 H 1.0867635
                                            c -0.432569,0 -0.78081,-0.40001 -0.78081,-0.89688 v -7.741418 c 0,-0.49687 0.348241,-0.89687 0.78081,-0.89687 z"/>
                    </svg>
                    <a href="#">
                        <h5 class="mb-2 mt-0 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Desarrollo de Apps</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    
                </div>

         </div>

           {/**END Card Section */}
  
    </div>

  )
}
