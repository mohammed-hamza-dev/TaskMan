import React, { useState, useEffect } from 'react'
import Taskform from './Components/Taskform'
import Progresstracker from './Components/Progresstracker'
import Tasklist from './Components/Tasklist'

export default function App() {
  
  const [tasks, setTasks] = useState([]); // 

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]); 
  }
   
  return (
    <div>
      <h1>TaskMan</h1>
      <p><i>Your Task manager !</i></p>

      <Taskform addTask = {addTask}/>
       <Tasklist tasks = {tasks} />
      <Progresstracker />
     

    </div>
  )
}

