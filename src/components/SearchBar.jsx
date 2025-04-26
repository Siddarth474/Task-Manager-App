import React, { useContext } from 'react'
import { ContextApi } from '../context/ContextApi'

const SearchBar = () => {

    const {filterTaskName, setFilterTaskName,darkMode} = useContext(ContextApi);

    const handleChange = (e) => {
        setFilterTaskName(e.target.value);
    }

    const changeTheme = () => {
        if(darkMode) return 'bg-[#1D1C20] text-white border-violet-500'
        return 'text-black bg-white'
    }

  return (
    <div className='flex justify-center'>
        <div className='flex w-full px-3 py-2 max-w-[350px]'>
            <input type='text' value={filterTaskName} onChange={handleChange} placeholder='Search by task...' 
            className={`w-full border ${changeTheme()} rounded-full py-1 px-3 outline-0 `} />
        </div>
    </div>
  )
}

export default SearchBar