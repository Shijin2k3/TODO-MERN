import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci';

export const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  
  const toggleMenu =() =>{
    setIsOpen(!isOpen)
  }


  return (
    <div className='"w-[100%] h-[100vh]"'>
      <div className=' w-[100%] h-[12vh] bg-gray-200 flex  justify-between  items-center px-4 md:px-10 '>
        <h1 className='text-black text-2xl font-bold'>TODO</h1>
        <div className='flex items-center flex-col '>
           {/* <div className=' h-auto md:hidden '>
             <button onClick={toggleMenu} className='text-black focus:outline-none'>
             <CiMenuBurger size={24} />
             </button>
           </div> */}
            
           <div className='flex flex-row  gap-4 md:gap-7 items-center right-0 top-19'>
              <div><a href="" className='text-black font-medium'>Home</a></div>
               <div ><a href="" className='text-black font-medium'>About Us</a></div>
               <div ><a href="" className='text-black font-medium'> Todo</a></div>
               <div ><a href="" className='text-black font-medium'>SignUp</a></div>
               <div ><a href="" className='text-black font-medium'>SignIn</a></div>
               <div ><a href="" className='text-black font-medium'>Logout</a></div>
            </div>
        </div> 

      </div>
      
    </div>
  )
}
  