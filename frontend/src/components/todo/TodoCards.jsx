import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {GrDocumentUpdate} from 'react-icons/gr'

const TodoCards = ({title,description}) => {
  return (
    <div className='w-50 h-25 p-3 overflow-hidden border-[1px] border-black'>
      <div className='flex flex-col overflow-clip'>
        <h4 className='text-xl'>{title}</h4>
        <p className='text-gray-500 text-[0.9rem] max-w-50'>{description.split("",40)}...</p>
      </div>
      <div className='flex justify-around my-1 '>
        <div className='flex cursor-pointer'><GrDocumentUpdate className='text-[20px] cursor-pointer' />
        <p className='text-[0.9rem]'>Update</p> 
        </div>
        <div className='flex cursor-pointer'>
          <AiFillDelete className='text-[20px] text-red-600 cursor-pointer' />
          <p className='text-[0.9rem]'>Delete</p>
          </div>
      </div>
    </div>
  )
}

export default TodoCards