import React, { useContext, useState } from 'react'
import { ContextApi } from '../context/ContextApi'
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Header = () => {

  const {setFilterStatus,filterStatus,darkMode, setDarkMode} = useContext(ContextApi);
  
  return (
    <div className='mb-4'>
        <div className='bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 py-4 px-3 
        md:px-5 flex items-center justify-between text-white'>
            <h1 className='hidden md:block text-3xl font-bold text-slate-200 ml-4 '>Task Manager</h1>
            <div className='flex text-[15px] md:text-[18px] gap-4 md:gap-10 mx-auto'>
                <h2 onClick={() => setFilterStatus('')} className={`font-medium cursor-pointer
                  ${filterStatus === '' ? 'text-black underline' : 'text-white'}`}>
                    Dashboard
                  </h2> 
                    
                <h2 onClick={() => setFilterStatus('In-progress')} className={`font-medium cursor-pointer
                  ${filterStatus === 'In-progress' ? 'text-black underline' : 'text-white'}`}>
                    In-Progress
                  </h2>

                <h2 onClick={() => setFilterStatus('Completed')} className={`font-medium cursor-pointer
                  ${filterStatus === 'Completed' ? 'text-black underline' : 'text-white'}`}>
                    Completed
                  </h2> 
            </div>

            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2 lg:border lg:pr-3 rounded-full'>
                    <p className='w-4 h-4 hidden sm:flex font-semibold bg-green-600  items-center justify-center p-4 rounded-full'>S</p>
                    <p className='hidden lg:block text-[15px] text-white font-medium'>Siddharth</p>
                </div>
                { darkMode ? 
                  <FaMoon onClick={() => setDarkMode(false)} className='w-5 h-5 cursor-pointer' />  
                   :
                  <FiSun onClick={() => setDarkMode(true)} className='w-5 h-5 cursor-pointer' />
                }
                
            </div>
        </div>
    </div>
  )
}

export default Header