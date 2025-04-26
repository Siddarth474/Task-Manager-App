import { createContext ,useState,useEffect} from "react";

export const ContextApi = createContext();

const ContextApiProvider = (props) => {

    const [showModel , setshowModel] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editTask, setEditTask] = useState(null);
    const [filterPriority, setFilterPriority] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [deleteId, setDeleteId] = useState(null);
    const [filterTaskName, setFilterTaskName] = useState('');

    const [darkMode, setDarkMode] = useState(() => {
      const saved = localStorage.getItem("dark");
      return saved !== null ? JSON.parse(saved) : false;
    });

    useEffect(() => {
      const stored = localStorage.getItem('tasks');
      if(stored) {
        setTasks(JSON.parse(stored));
      }
      setIsLoading(false);
    } , []);
    
    useEffect(() => {
      if(!isLoading) {
        localStorage.setItem('tasks' , JSON.stringify(tasks));
      }
    },[tasks , isLoading]);

    useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(darkMode));
    },[darkMode]);

    const contextValue = {
      showModel , setshowModel,
      tasks, setTasks,
      isLoading,
      setEditTask,editTask,
      filterPriority, setFilterPriority,
      filterStatus, setFilterStatus,
      darkMode, setDarkMode,
      deleteId, setDeleteId,
      filterTaskName, setFilterTaskName
    };

    return (
        <ContextApi.Provider value={contextValue}>
            {props.children}
        </ContextApi.Provider>
    )
}

export default ContextApiProvider;