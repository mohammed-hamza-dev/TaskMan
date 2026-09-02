import React from 'react'

export default function Tasklist({ tasks }) {
  return (
    <ul className="tasklist">
      {tasks.map((task, index) => (
        <li key={index}>
          
          {/* Display task details */} 
          <div>
          <span >{task.text}</span>
          <small>{task.priority}, {task.category}</small>
          </div>
         
         {/* Buttons to toggle completion and delete task */} 
         <div>
          <button onClick={() =>toggleComplete(index)} >{task.completed ? 'Undo' : 'Complete'}</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
         </div>
         
        </li>
      ))}
    </ul>
  )
}
