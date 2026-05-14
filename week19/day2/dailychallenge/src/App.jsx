import './App.css'
import { CreateTask } from './Components/CreateTask';
import { SortTasks } from './Components/SortTasks';
import { TaskList } from './Components/TaskList';

function App() {


  return (
    <>
      <CreateTask />
      <SortTasks />
      <span>Task List below</span>
      <TaskList />
    </>
  )
}

export default App
