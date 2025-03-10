import React from 'react';

const Update = ({ inputs, handleChange, handleUpdateSubmit,handleUpdateClose }) => {
  return (
    <div className='w-[80%] mx-10 fixed p-5 py-10 my-10 flex flex-col bg-white justify-center items-center border-2 border-gray-500 rounded-2xl'>
      <h1 className='w-[70%] font-extrabold text-2xl my-1'>Update Your Task</h1>
      <input
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        className='bg-white  w-[70%] outline-none border-2 border-gray-500 rounded-2xl my-2 p-2 '
      />
      <textarea
        name="description"
        value={inputs.description}
        onChange={handleChange}
        className='bg-white  w-[70%] outline-none border-2 border-gray-500 rounded-2xl my-2 p-2'
      ></textarea>
      <div className='flex justify-between gap-30'>
      <button
        onClick={handleUpdateSubmit}
        className='bg-black text-gray-50 font-bold px-[2rem] py-[0.5rem] rounded-xl mt-2 text-center border-[1px] border-gray-500'
      >
        UPDATE
      </button>
      <button
        onClick={handleUpdateClose}
        className='bg-black text-gray-50 font-bold px-[2rem] py-[0.5rem] rounded-xl mt-2 text-center border-[1px] border-gray-500'
      >
        CLOSE
      </button>
      </div>
    </div>
  );
};

export default Update;