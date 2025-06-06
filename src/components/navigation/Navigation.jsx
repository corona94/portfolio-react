import React from 'react'
import imge from './react.png'


export default function Navigation() {
  return (
    
 
    <>

    <nav className='dark:bg-gray-800'>

      <div className='max-w-screeen flex items-center justify-between p-2' >
    {/***************************Logo section************************************/}
           <a href="" className='flex items-center'> 
            <img src= {imge} width={50} className=''/>
            <span className='self-center p-3 text-2xl font-semibold dark:text-white whitespace-nowrap' >
              Portfolio</span>
           </a>
    {/***************************Logo section************************************/}
     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-rigth text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

  {/*************Menu Section**********/}

<div className='hidden w-full md:block md:w-auto' id='navbar-default'>
    <ul className=' font-medium flex flex-col p-4 md:p-2 md:flex-row text-gray-50'>

      <li>
        <a href="" className=' hover:text-gray-500 text-blue-500 px-4 py-2 rounded-sm hover:bg-gary-100 font-semibold '>Home</a>
      </li>
      <li>
        <a href="" className='px-4 py-2 rounded-sm hover:bg-gary-100 font-semibold '>Contact</a>
      </li>
      <li>
        <a href="" className='px-4 py-2 rounded-sm hover:bg-gary-100 font-semibold '>Portafolio</a>
      </li>


    </ul>

</div>





  {/***************Menu Section**********/}
       

       


      

     

        {/**/}



      </div>


    </nav>
    
    </>
 
  )
}
