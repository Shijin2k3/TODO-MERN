import React from 'react'

export const Navbar = () => {
  return (
    <div className='"w-[100%] h-[100vh]"'>
      <div className='w-[100%] h-[12vh] bg-gray-200 flex  justify-between px-[30px] items-center'>
        <h1 className='text-black text-[2rem] font-bold'>TODO</h1>
        <ul className='flex  gap-7 items-center'>
          <li ><a href="" className='text-black font-medium'>Home</a></li>
          <li ><a href="" className='text-black font-medium'>About Us</a></li>
          <li ><a href="" className='text-black font-medium'>SignUp</a></li>
          <li ><a href="" className='text-black font-medium'>SignIn</a></li>
          <li ><a href="" className='text-black font-medium'>Logout</a></li>
          <li ><a href="" className='text-black font-medium' >
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User"
            className="w-14 h-[6vh] " />
          </a>
          </li>
        
         
          
        </ul>

      </div>
    </div>
  )
}
  