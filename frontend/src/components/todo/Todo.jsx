import React, { useEffect, useState } from 'react'
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import Update from './Update';
import axios from 'axios';

let id =sessionStorage.getItem("id");


export const Todo = () => {
    const[inputs,setInputs]=useState({title:"",description:""});
    const [array,setArray]=useState([]);
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);
    const [currentId, setCurrentId] = useState(null);

   

   const handleChange =(e)=>{
      const {name,value}=e.target;
      setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
   }
   const handleSubmit= async(e) =>{
       e.preventDefault()
       if(!inputs.title ||  !inputs.description){
        toast.error("Please Enter Title and Description ")
       }else{
          if(id){
            try {
              const response = await axios.post("http://localhost:8000/api/v1/addTask", {
                  title: inputs.title,
                  description: inputs.description,
                  id: sessionStorage.getItem("id"),
              });
              console.log(response);
              setInputs({ title: "", description: "" }); // Reset inputs after successful submission
            toast.success("Your Task is added");
              // This will log the response if the request is successful
          } catch (error) {
              console.error("Error adding task:", error); // Log the error if the request fails
              toast.error("Failed to add task. Please try again.");
          }
         
          setInputs({title:"",description:""})
          toast.success("Your Task is added")
          
          }else{
            
            setInputs({title:"",description:""})
            toast.error("Your Task is not saved Please Sign in")
          }
     
       }
   }
   const del=async(taskId)=>{
    if(id){
      await axios.delete(`http://localhost:8000/api/v1/deleteTask/${taskId}`,{
        data:{id:id},
      })
      .then(()=>{
        toast.success("Task is deleted Successfully")
      })
    }else{
      toast.error("Please Signup first")
    }
   
    // array.splice(id,"1");
    // setArray([...array]);
   
   }
   const handleUpdateClick=(id) =>{
    setCurrentId(id);
    const itemIndex = array.findIndex(item => item._id === id);
    if (itemIndex !== -1) {
        // Set currentId to the actual task ID
        setInputs(array[itemIndex]); // Set inputs to the current todo item
        setIsUpdateVisible(true);
    } else {
        console.error("Todo item not found for id:", id);
    }
   }
   const handleUpdateSubmit = async(currentId) => {

    console.log("Updating task with ID:", currentId); // Log the currentId
    console.log("Inputs to be updated:", inputs);
    try {
      // Send the updated data to the backend
      const response = await axios.put(`http://localhost:8000/api/v1/updateTask/${currentId}`, inputs);
      
      // Update the local state with the new data
      const updatedArray = array.map((item, index) => 
          index === currentId ? response.data : item
      );
      
      setArray(updatedArray);
      setIsUpdateVisible(false);
      toast.success("Task updated successfully");
  } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task");
  }
  };
  const handleUpdateClose =() =>{
    setIsUpdateVisible(false);
     setInputs({ title: "", description: "" })
  }
  useEffect(()=>{
    if(id){
      const fetch= async()=>{
        await axios.get(`http://localhost:8000/api/v1/getTask/${id}`)
        .then((response)=>{
          setArray(response.data.list)
       } )
      }
    fetch();
    }
    
  },[handleSubmit])

  return (
    <>
    <div className='relative w-[100%] min-h-[88vh]'>
       <ToastContainer />
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
             <div key={i} className= 'w-[20%] h-[8vh] flex items-center justify-center columns-lg  mx-5 my-10'>
             <TodoCards title={item.title}
              description={item.description}
               id={item._id} 
               delId={del}
                onUpdate={handleUpdateClick}
                />
             </div>
             ))}
            
          </div>
         
        </div>
      </div>
    </div>
    {isUpdateVisible && (
          <div className='absolute w-[100%] h-[50vh] bg-white top-[80px] left-0'>
            <div className='px-10'>
              <Update 
                inputs={inputs} 
            
                handleChange={handleChange} 
                handleUpdateSubmit={handleUpdateSubmit} 
                handleUpdateClose={handleUpdateClose}
              />
            </div>
          </div>
        )}
    </>
  )
}
