import React, { useState, useEffect } from 'react'
import Taskform from './Components/Taskform'
import Progresstracker from './Components/Progresstracker'
import Tasklist from './Components/Tasklist'

import Login from './Pages/Login'
import Signup from './Pages/Signup'

export default function App() {

  console.log('App is running')

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showSignup, setShowSignup] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const [tasks, setTasks] = useState([]); // 


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (task) => {
    setTasks([...tasks, task]);
  }


  const updatetask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  }


  const deletetask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearAllTasks = () => {
    setTasks([]);
  };


  if (showSignup) {
    return <Signup onBackToLogin={() => setShowSignup(false)} />
  }


  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)}
      onSignup={() => setShowSignup(true)} />
  }





  return (

    <div>
      <h1>TaskMan</h1>
      <p><i>Your Task manager !</i></p>

      <button onClick={handleLogout}>Logout</button>

      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} updateTask={updatetask} deleteTask={deletetask} />
      <Progresstracker tasks={tasks} />

      {tasks.length > 0 && (<button className="clear" onClick={() => setTasks([])}>Clear All</button>)}

    </div>

  )
}

