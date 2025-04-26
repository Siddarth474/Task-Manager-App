import React, { useContext } from 'react'
import { ContextApi } from '../context/ContextApi';
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";

const ConfirmDeleteCard = () => {

    const {deleteId,setDeleteId, tasks, setTasks} = useContext(ContextApi);

    const deleteTasks = (id) => {
        const updatedTask = tasks.filter(t => {
          return t.id !== id;
        });
        setTasks(updatedTask);
        setDeleteId(null);
      }

  return (
    <div>
        <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40'></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className='min-w-[250px] p-5 bg-gray-800 rounded-md'>
            <h1 className='text-white text-center text-xl font-semibold'>You sure wanted to remove the task!</h1>
            <div className='flex items-center text-white mt-6 gap-3'>
                <IoMdCheckmark onClick={() => deleteTasks(deleteId)} 
                className='bg-green-500 h-8 w-[50%] p-1 rounded cursor-pointer hover:bg-green-600' />
                <RxCross2 onClick={() => setDeleteId(null)} 
                className='bg-red-500 h-8 w-[50%] p-1 rounded cursor-pointer hover:bg-red-600' />
            </div>
          </div>
          </div>
    </div>
  )
}

export default ConfirmDeleteCard