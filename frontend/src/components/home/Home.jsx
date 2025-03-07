import React from 'react'

export const Home = () => {
  return (
    <div className='w-[100%] h-[88vh] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-6'>
            <h1 className='font-bold text-[3.5rem]'>Organize Your work  <br /> and life,finally</h1>
            <p className=''>Become focused organized and calm with <br />Todo App
            The World's #1 task manager app</p>
            <button className='bg-black text-gray-50 font-bold px-[2rem] py-[0.5rem] rounded-full mt-2 text-center border-[1px] border-gray-500'>Make Todo List</button>
        </div>
    </div>
  )
}
