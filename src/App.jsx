
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import DisplayCards from './components/DisplayCards'
import { useContext } from 'react'
import { ContextApi } from './context/ContextApi'
import SearchBar from './components/SearchBar'

function App() {

  const {darkMode} = useContext(ContextApi);

  const changeTheme = () => {
    if(darkMode) return 'bg-gradient-to-b from-[#0D0D0D] via-[#151515] to-[#1F1F1F] text-white';
    return 'bg-gray-300 text-black';
  }

  return (
    <div className={`w-full h-screen ${changeTheme()} duration-200  overflow-auto`}>
      <Header/> 
      <div className='w-full'>
        <SearchBar />
        <TaskForm/>
        <DisplayCards />
      </div>
    </div>
  )
}

export default App
