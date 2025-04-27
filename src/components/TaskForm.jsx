import React, { useContext, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import PopCard from './PopCard';
import { ContextApi } from '../context/ContextApi';
import ConfirmDeleteCard from './ConfirmDeleteCard';

const TaskForm = () => {

  const {showModel,setshowModel,darkMode,deleteId} = useContext(ContextApi);

  return (
    <div>
      <FaPlus onClick={() => setshowModel(true)} className={`fixed bottom-6 right-6 text-white text-3xl p-2
      ${darkMode ? 'bg-violet-700' : 'bg-black'} 
      rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg hover:bg-violet-700 hover:scale-110 duration-200 cursor-pointer`}/> 
        { showModel && (
          <>
          <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40'></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <PopCard />
          </div>
          </>
        )}
        {
          deleteId ? <ConfirmDeleteCard /> : null
        }
    </div>
  )
}

export default TaskForm