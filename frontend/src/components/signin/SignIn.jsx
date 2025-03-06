import React from 'react'

export const SignIn = () => {
  return (
    <div className='w-[100%] h-[88vh] px-10'>
      <div className=' '>
        <div className='flex justify-between '>
          <div className='w-[100%] p-5 h-screen flex justify-center items-center '>
            <div className='w-full py-14  rounded-lg shadow-xl bg-white font-medium flex  justify-center '>
              
              <form className='w-[35%] flex flex-col' action="">
                <h1 className='my-3 font-medium'>If you already have an Account. Please SignIn... </h1>  
                <input
                 className='p-2 my-3 border-2 border-gray-500 rounded-2xl outline-none' type="email" name="email"

                  placeholder='Enter Your Email' autoComplete='off'
                />
                <input
                 className='p-2 my-3 border-2 border-gray-500 rounded-2xl outline-none' type="password" name="password"
                  placeholder='Enter Your Password' autoComplete='off'
                />
                <button type='submit' className= 'my-3 bg-black font-bold text-xl text-gray-300 py-4 rounded-2xl cursor-pointer hover:bg-gray-950'>
                  SignIn
                  </button>
              </form>
            </div>
          </div>
         
        </div>
      </div>
    </div>

  )
}
