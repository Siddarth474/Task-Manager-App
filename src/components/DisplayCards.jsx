import React, { useContext, useState } from 'react'
import { ContextApi } from '../context/ContextApi'
import TaskCard from './TaskCard';
import { IoFilter } from "react-icons/io5";

const DisplayCards = () => {

    const {tasks,isLoading,filterPriority, setFilterPriority,filterStatus,
    filterTaskName,darkMode} = useContext(ContextApi);

    const filteredTasks = tasks.filter(task => {
        const matchPriority = filterPriority ? task.priority === filterPriority : true;
        const matchStatus = filterStatus ? task.status === filterStatus : true;
        const matchTask = filterTaskName ? task.title === filterTaskName : true;
        return matchPriority && matchStatus && matchTask;
    });

    const setFilterOptionColor = () => {
        if (filterPriority === 'High') return 'text-red-500';
        if (filterPriority === 'Medium') return 'text-yellow-500';
        if (filterPriority === 'Low') return 'text-green-500';
    
        if (filterPriority === '') {
            return darkMode ? 'text-white' : 'text-black';
        }   
        return 'text-black';
    }
    
  return (
    <div className='my-6 sm:my-3 max-w-[1400px] mx-auto px-1'>
        <h1 className='text-3xl font-bold  mb-5 underline'>Your Tasks</h1>
        { (tasks.length === 0) ? <p className="text-center text-gray-500 text-2xl mt-4">No tasks available!</p> : null }
        
        { (tasks.length) ?
            <div className='mb-8'>
                <div className={`flex gap-2 mb-2 ${darkMode ? 'text-violet-700' : 'text-slate-800'}`}>
                    <IoFilter className='w-6 h-6'/>
                    <h2 className='text-[18px] font-semibold'>Filter by Priority</h2>
                </div>
                <select onChange={(e) => setFilterPriority(e.target.value)} 
                className={`p-2 rounded-md outline-0 cursor-pointer ${setFilterOptionColor()}
                ${darkMode ? 'bg-[#1D1C20]' : 'bg-white'} `}>
                    <option value=''>All</option>
                    <option value='High' className='text-red-500'>High</option>
                    <option value='Medium' className='text-yellow-500'>Medium</option>
                    <option value='Low' className='text-green-500'>Low</option>
                </select>
            </div> : null 
        } 
        {(filteredTasks.length === 0) ? <h1 className='text-slate-500 text-center text-2xl'>No Task Matched!</h1> : null} 
        <div className='w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4'>

            { isLoading ? <p className='text-center text-2xl text-black'>Loading Tasks...</p> : null }
            {
                filteredTasks.map(task => (
                    <TaskCard key={task.id} {...task} />
                ))
            }
        </div>
    </div>
  )
}

export default DisplayCards