import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  // const [isOpen,setIsOpen]=useState(false);
  // const toggleMenu =() =>{
  //   setIsOpen(!isOpen)
  // }
  return (
    <div className='"w-[100%] h-[100vh]"'>
      <div className=' w-[100%] h-[12vh] bg-gray-200 flex  justify-between  items-center px-4 md:px-10 '>
        <h1 className='text-black text-2xl font-extrabold'>TODO</h1>
        <div className='flex items-center flex-col '>
           {/* <div className=' h-auto md:hidden '>
             <button onClick={toggleMenu} className='text-black focus:outline-none'>
             <CiMenuBurger size={24} />
             </button>
           </div> */}
           <div className='flex flex-row  gap-4 md:gap-7 items-center right-0 top-19'>
               <div><Link to='/' className='text-black font-medium'>Home</Link></div>
               <div ><Link to='/about' className='text-black font-medium'>About Us</Link></div>
               <div ><Link to='/todo' className='text-black font-medium'> Todo</Link></div>
               <div ><Link to='/signup' className='text-black font-medium'>SignUp</Link></div>
               <div ><Link to='/signin' className='text-black font-medium'>SignIn</Link></div>
               <div ><Link to='/logout' className='text-black font-medium'>Logout</Link></div>
            </div>
        </div> 
      </div>    
    </div>
  )
}
  