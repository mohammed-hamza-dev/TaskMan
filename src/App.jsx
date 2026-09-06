import React, { useState, useEffect } from 'react'
import Taskform from './Components/Taskform'
import Progresstracker from './Components/Progresstracker'
import Tasklist from './Components/Tasklist'

export default function App() {
  
  const [tasks, setTasks] = useState([]); // 

  // Load tasks from localStorage on component mount
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]); 
  }

  // Function to update a task
  const updatetask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  }

  // Function to delete a task
  const deletetask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearAllTasks = () => {
    setTasks([]);
  };

  // Function to load tasks from localStorage on component mount
  return (
    <div>
      <h1>TaskMan</h1>
      <p><i>Your Task manager !</i></p>

      <Taskform addTask = {addTask}/>
       <Tasklist tasks = {tasks} updateTask={updatetask} deleteTask={deletetask}/>
      <Progresstracker tasks={tasks} />
     
     {tasks.length > 0 && (<button className="clear" onClick={() => setTasks([])}>Clear All</button>)}

    </div>

 )
}  

