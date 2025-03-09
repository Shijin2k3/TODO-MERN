import React, { useState } from 'react'
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import Update from './Update';


export const Todo = () => {
    const[inputs,setInputs]=useState({title:"",description:""});
    const [array,setArray]=useState([]);
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);
    const [currentId, setCurrentId] = useState(null);

   const handleChange =(e)=>{
      const {name,value}=e.target;
      setInputs({...inputs,[name]:value});
   }
   const handleSubmit=(e) =>{
       e.preventDefault()
       if(!inputs.title ||  !inputs.description){
        toast.error("Please Enter Title and Description ")
       }else{

       setArray([...array,inputs])
       setInputs({title:"",description:""})
       toast.success("Your Task is added")
       }
   }
   const del=(id)=>{
    array.splice(id,"1");
    setArray([...array]);
    toast.success("Task is deleted Successfully")
   }
   const handleUpdateClick=(id) =>{
    setCurrentId(id);
    setInputs(array[id]); // Set inputs to the current todo item
    setIsUpdateVisible(true);
   }
   const handleUpdateSubmit = () => {
    const updatedArray = array.map((item, index) => 
      index === currentId ? inputs : item
    );
    setArray(updatedArray);
    setIsUpdateVisible(false);
    toast.success("Task updated successfully");
  };

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
             <div className= 'w-[20%] h-[8vh] flex items-center justify-center columns-lg  mx-5 my-10'>
             <TodoCards title={item.title} description={item.description} id={i} delId={del} onUpdate={handleUpdateClick}/>
             </div>
             ))}
            
          </div>
         
        </div>
      </div>
    </div>
    {isUpdateVisible && (
          <div className='absolute w-[100%] h-[50vh] bg-amber-300 top-[80px] left-0'>
            <div className='px-10'>
              <Update 
                inputs={inputs} 
                handleChange={handleChange} 
                handleUpdateSubmit={handleUpdateSubmit} 
              />
            </div>
          </div>
        )}
    </>
  )
}
