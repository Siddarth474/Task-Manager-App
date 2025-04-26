import React, { useContext, useEffect, useState } from 'react'
import { ContextApi } from '../context/ContextApi';

const PopCard = () => {

  const {setshowModel,tasks,setTasks,editTask,setEditTask} = useContext(ContextApi);

  const [formData , setFormData] =  useState({
    title : '',
    desc : '',
    date: new Date().toISOString().split('T')[0],
    status : '',
    priority : ''
  });  

  useEffect(() => {
    if(editTask) {
      setFormData({
        title: editTask.title,
        desc: editTask.desc,
        date: editTask.date,
        status: editTask.status,
        priority: editTask.priority
      });
    }
  } ,[editTask]);

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData({...formData , [name] : value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.title === '' || formData.desc === '' || formData.date === '' || 
      formData.status === '' || formData.priority === '') return;
      
      if(editTask) {
        const updated = tasks.map((t) => 
        t.id === editTask.id ? 
        {...t, title:formData.title, 
          desc:formData.desc, 
          date:formData.date,
          status:formData.status, 
          priority:formData.priority} : t);

          setTasks(updated);
          setEditTask(null);
      }
      else {
        setTasks([...tasks, {id : Date.now() , ...formData}]);
        setFormData({
          title : '', desc : '', date : '', status : '', priority : ''
        });
      }
      setshowModel(false);
  }

  return (
    <div>
        <div className='min-w-[290px] sm:min-w-[320px] bg-gradient-to-r from-purple-700 via-purple-800
         to-purple-900 p-5 rounded-lg shadow-lg w-full z-50'>
            <form className='flex flex-col text-white'>
                <label htmlFor='1' className='text-[16px] cursor-pointer mb-1'>Title:</label>
                <input type='text' name='title' 
                  value={formData.title} 
                  onChange={handleChange} 
                  placeholder='Add task name...' id='1' 
                  className='bg-white  text-black py-1 px-2 mb-3 rounded-md outline-0' />

                <label htmlFor='2' className='text-[16px] cursor-pointer mb-1'>Description:</label>
                <input type='text' name='desc' 
                  value={formData.desc} onChange={handleChange}
                  placeholder='Description...' id='2' 
                  className='bg-white text-black py-1 px-2 mb-3 rounded-md outline-0' />

                <label className='text-[16px] cursor-pointer mb-1'>Date</label>
                <input type='date' name='date' 
                  value={formData.date}
                  onChange={handleChange}
                  className='bg-white text-black py-1 px-2 mb-3 rounded-md outline-0' />

                <div className='mb-3'>
                    <p>Status:</p>
                    <select name='status' value={formData.status} onChange={handleChange} 
                    className='bg-white text-black text-[15px] 
                    outline-0 p-1 cursor-pointer rounded-sm'>                
                      <option value="" disabled hidden> Select status </option> 
                      <option value='Completed' className='text-green-500'>Completed</option>
                      <option value='In-progress' className='text-yellow-500'>In-progress</option>
                    </select>    
                </div>

                <div className='flex items-center justify-between'>
                  <div>
                      <p>Priority:</p>
                      <select name='priority' value={formData.priority} onChange={handleChange}
                      className='bg-white text-black text-[15px] 
                      outline-0 p-1 cursor-pointer rounded-sm'>
                        <option value="" disabled hidden> Select priority </option>
                        <option value='High' className='text-red-500'>High</option>
                        <option value='Medium' className='text-yellow-500'>Medium</option>
                        <option value='Low' className='text-green-500'>Low</option>
                      </select>
                  </div>

                  <div className='flex gap-2 mt-5'>
                    <button onClick={handleSubmit} className='bg-green-500 text-[15px] text-white p-1 rounded-md cursor-pointer hover:bg-green-600'>{editTask ? 'Update' : 'Add'}</button>
                    <button onClick={() => {setshowModel(false),setEditTask(null)}} className='bg-red-500 text-[15px] text-white p-1 rounded-md cursor-pointer hover:bg-red-600'>Cancel</button>
                  </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PopCard