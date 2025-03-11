import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {
 const [inputs,setInputs]=useState({
  email:"",
  username:"",
  password:""
 })
 const navigate=useNavigate();
 

  const handleChange =(e) =>{
    const {name,value}=e.target;
    setInputs({...inputs,[name]:value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:8000/api/v1/register",inputs)
      .then(response => {   
       alert(response.data.message);   
        setInputs({
        email:"",
        username:"",
        password:""
       })
       navigate('/signin')
      
    })
     .catch(error => {
      if (error.response) {
        // Handle specific error messages
        if (error.response.status === 400) {
          toast.error(error.response.data.message || 'Internal server Error');
        } else {
          toast.error('An unexpected error occurred. Please try again.');
        }
      } else {
        toast.error('Network error. Please check your connection.');
      }
    })
    //  console.log(inputs)
    //  toast.success("Registered Successfully")
  }
  return (
    <div className='w-[100%] h-[88vh] px-10'>
      <ToastContainer />
      <div className=' '>
        <div className='flex justify-between '>
          <div className='w-[100%] p-5 my-10 flex justify-center items-center '>
            <div className='w-full py-14  rounded-lg shadow-2xs bg-white font-medium flex  justify-center '>
              
              <form className='w-[35%] flex flex-col' action="">
                <h1 className='my-3 font-medium'>If you don't have an Account. Please SignUp... </h1>  
                <input
                 className='p-2 my-3 border-2 border-gray-500 rounded-2xl outline-none' type="email" name="email" onChange={handleChange}

                  placeholder='Enter Your Email' autoComplete='off' value={inputs.email}
                />
                <input
                 className='p-2 my-3 border-2 border-gray-500 rounded-2xl outline-none' type="text"  name="username" onChange={handleChange}
                  placeholder='Enter Your Username' autoComplete='off' value={inputs.username}
                />
                <input
                 className='p-2 my-3 border-2 border-gray-500 rounded-2xl outline-none' type="password" name="password" onChange={handleChange}
                  placeholder='Enter Your Password' autoComplete='off' value={inputs.password}
                />
                <button type='submit' onClick={handleSubmit} className= 'my-3 bg-black font-bold text-xl text-gray-300 py-4 rounded-2xl cursor-pointer hover:bg-gray-950'>SignUp</button>
              </form>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}
