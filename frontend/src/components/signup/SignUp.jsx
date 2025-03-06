import React from 'react'

export const SignUp = () => {
  return (
    <div className='w-[100%] h-[88vh] px-10'>
      <div className=' '>
        <div className='flex justify-between '>
          <div className='w-[50%] h-screen flex justify-center items-center '>
            <div className='flex '>
              <form className='flex flex-col' action="">
                <input
                 className='p-2 mb-2' type="email" name="email"
                  placeholder='Enter Your Email' autoComplete='off'
                />
                <input
                 className='p-2 mb-2' type="text"  name="username"
                  placeholder='Enter Your Username' autoComplete='off' 
                />
                <input
                 className='p-2 mb-2' type="password" name="password"
                  placeholder='Enter Your Password' autoComplete='off'
                />
              </form>
            </div>
          </div>
          <div className='w-[50%] text-center'>X</div>
        </div>
      </div>
    </div>
  )
}
