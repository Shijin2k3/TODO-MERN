import React, { useState } from 'react'

export const Todo = () => {
   const[inputs,setInputs]=useState({title:"",description:""});

   const handleChange =(e)=>{
      const {name,value}=e.target;
      setInputs({...inputs,[name]:value});
   }
   const handleSubmit=(e) =>{
       e.preventDefault()
       console.log(inputs)
       setInputs({title:"",description:""})
   }

  return (
    <div className='w-[100%] h-[88vh]'>
      <div className='w-[60%] mx-65  flex  justify-center items-center my-12 shadow-xl py-10'>
        <div className='flex flex-col my-3 w-100 '>
            <h1 className='font-extrabold text-2xl my-5'>MY TODO</h1>
           <input
            className='outline-none border-2 border-gray-500 rounded-2xl my-2 p-2' 
            type="text"
            name='title'
            value={inputs.title}
            placeholder='TITLE'
            onChange={handleChange} 
           />
           <textarea
            className='outline-none border-2 border-gray-500 rounded-2xl p-2' 
            type="text"
            name='description'
            value={inputs.description}
            placeholder='DESCRIPTION'
            onChange={handleChange} 
           />
            <button type='submit' onClick={handleSubmit}  className= 'my-3 bg-black font-bold text-xl text-gray-300 py-4 rounded-2xl cursor-pointer hover:bg-gray-950'>Add</button>
        </div>
      </div>
    </div>
  )
}
