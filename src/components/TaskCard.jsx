import React, { useContext, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ContextApi } from '../context/ContextApi';

const TaskCard = ({title,id,desc,date,status,priority}) => {

  const {setshowModel,setEditTask,darkMode,setDeleteId} = useContext(ContextApi);

  const prefillPopCard = () => {
    setEditTask({title,id,desc,date,status,priority});
    setshowModel(true);
  }

  const changeCardTheme = () => {
    if(darkMode) return 'bg-[#1D1C20] text-white '
    else return 'bg-white text-black'
  }

  const getPriorityColor = (priority) => {
    if(priority === 'High') return 'text-red-500';
    else if(priority === 'Medium') return 'text-yellow-500';
    else return 'text-green-500';
  }

  const getStatusColor = (status) => {
    if(status === 'Completed') return 'text-green-500';
    return 'text-yellow-500';
  }

  const getBorderColor = (status) => {
    if(status === 'Completed') return 'border-2 border-green-500';
    return 'border-2 border-yellow-500';
  }

  return (
    <div className={`min-w-[300px] h-auto w-full ${changeCardTheme()} ${getBorderColor(status)} text-black p-4 shadow-md rounded-md
     hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out`}>
        <h1 className='text-2xl font-semibold capitalize mb-2'>{title}</h1>
        <p className='text-gray-500 text-[16px] text-sm mb-2'>{desc}</p>
        <p className='mb-2'><strong>Date:</strong> {date}</p>
        
        <p className='mb-2'>
          <span className='font-bold'>Status: </span>
          <span className={getStatusColor(status)}>{status}</span>
        </p>

        <div className='flex items-center justify-between'>
          <p>
            <span className='font-bold'>Priority: </span>
            <span className={`mb-2 ${getPriorityColor(priority)}`}>{priority}</span>
          </p>
          <div className='flex items-center gap-3'>
            <MdEdit onClick={prefillPopCard} className='w-6 h-6 text-green-500 cursor-pointer ' />
            <MdDelete onClick={() => setDeleteId(id)} className='w-6 h-6 text-red-500 cursor-pointer' />
          </div>
        </div>
    </div>
  )
}

export default TaskCard