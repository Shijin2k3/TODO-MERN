import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store';

export const SignIn = () => {
   const dispatch=useDispatch()//allows you to send actions that can modify the state in your Redux store
   const [inputs,setInputs]=useState({
    email:"",
    password:""
   })
   const navigate=useNavigate();
    const handleChange =(e) =>{
       const {name,value}=e.target;
       setInputs({...inputs,[name]:value})
     }
    const handleSubmit=async(e)=>{
       e.preventDefault()
       await axios.post("http://localhost:8000/api/v1/login",inputs)
         .then(response => {   
         sessionStorage.setItem("id",response.data.user._id)  
        dispatch(authActions.login())
         navigate("/todo") 
         
         
       })
        .catch(error => {
           if (error.response) {
                  // Handle specific error messages
                  if (error.response.status === 500) {
                    alert(error.response.data.message || 'Internal server');
                  }
                  else if (error.response.status === 404) {
                    alert(error.response.data.message || 'User doesnt exist');
                  }
                  else if (error.response.status === 401) {
                    alert(error.response.data.message || 'incorrect password');
                  } else {
                    alert('An unexpected error occurred. Please try again.');
                  }
                } else {
                  alert('Network error. Please check your connection.');
                }
              })
    
      }
  return (
    <div className='w-[100%] h-[88vh] px-10'>
      <div className=' '>
        <div className='flex justify-between '>
          <div className='w-[100%] p-5 my-8 flex justify-center items-center '>
            <div className='w-full py-14  rounded-lg shadow-xs bg-white font-medium flex  justify-center '>
              
              <form className='w-[35%] flex flex-col' action="">
                <h1 className='my-3 font-medium'>If you already have an Account. Please SignIn... </h1>  
                <input
                 className='p-2 my-3 border-2 border-gray-500 rounded-2xl outline-none' type="email" name="email"

                  placeholder='Enter Your Email' autoComplete='off' value={inputs.email} onChange={handleChange}
                />
                <input
                 className='p-2 my-3 border-2 border-gray-500 rounded-2xl outline-none' type="password" name="password"
                  placeholder='Enter Your Password' autoComplete='off' value={inputs.password} onChange={handleChange}
                />
                <button type='submit'onClick={handleSubmit} className= 'my-3 bg-black font-bold text-xl text-gray-300 py-4 rounded-2xl cursor-pointer hover:bg-gray-950'>
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
