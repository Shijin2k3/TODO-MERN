import React, { useState } from 'react'
import TodoCards from './TodoCards';

export const Todo = () => {
   const[inputs,setInputs]=useState({title:"",description:""});
    const [array,setArray]=useState([]);

   const handleChange =(e)=>{
      const {name,value}=e.target;
      setInputs({...inputs,[name]:value});
   }
   const handleSubmit=(e) =>{
       e.preventDefault()
       setArray([...array,inputs])
       setInputs({title:"",description:""})
   }

  return (
    <div className='w-[100%] min-h-[88vh]'>
      <div className='w-[60%] mx-[20%]  flex  justify-center items-center  shadow-xl '>
        <div className='flex flex-col my-3 w-100 '>
            <h1 className='font-extrabold text-2xl my-1'>MY TODO</h1>
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
            <button type='submit' onClick={handleSubmit}  className= 'my-3 ml-[80%] bg-black font-bold text-xl text-gray-300 py-2 rounded-2xl cursor-pointer w-[20%] hover:bg-gray-950'>Add</button>
        </div>
      </div>
      <div className='my-3'>
        <div className='mx-20'>
          <div className=' flex  flex-row flex-wrap justify-items-start'>
            {array && array.map((item,i)=>(
             <div className= 'w-[20%] h-[8vh] flex items-center justify-center columns-lg  mx-5 my-10'>
             <TodoCards title={item.title} description={item.description}/>
             </div>
             ))}
            
          </div>
         
        </div>
      </div>
    </div>
  )
}
