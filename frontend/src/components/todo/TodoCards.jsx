import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {GrDocumentUpdate} from 'react-icons/gr'

const TodoCards = ({title,description,id,delId,onUpdate}) => {
  return (
    <div className='w-60 h-28 p-3 overflow-hidden border-[1px] border-black'>
      <div className='flex flex-col overflow-clip'>
        <h4 className='text-xl'>{title}</h4>
        <p className='text-gray-500 text-[0.9rem] max-w-50'>{description}</p>
      </div>
      <div className='flex justify-around my-2 '>
        <div className='flex cursor-pointer' onClick={() =>{onUpdate(id)
    
        }}>
          <GrDocumentUpdate className='text-[20px] cursor-pointer' />
        <p className='text-[0.9rem]'>Update</p> 
        </div>
        <div className='flex cursor-pointer ' onClick={() =>delId(id)}>
          <AiFillDelete className='text-[20px] text-red-600 cursor-pointer' />
          <p className='text-[0.9rem]'>Delete</p>
          </div>
      </div>
    </div>
  )
}

export default TodoCards