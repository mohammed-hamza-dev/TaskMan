import React, { useState } from 'react';


// Taskform component - handles creating a new task
export default function Taskform({ addTask }) {

  // State variables - store task, priority and category
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('general');


  // handleSubmit function - adds the new task
  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      text: task, priority, category, completed: false});

    // Reset the form fields after submission
    setTask('');
    setPriority('medium');
    setCategory('general');
  };


  // Return - displays the task form
  return (
    <form onSubmit={handleSubmit} className="taskform">

      <br />


      <div id="input">

        <input
          type="text"
          placeholder="Enter your task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />


        <span>
          <button type="submit">Add Task</button>
        </span>


        <h2>
          Task: {task} {priority} - {category}
        </h2>

      </div>


      <div id="btns">

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >

          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>

        </select>


        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>

        </select>

      </div>

    </form>
  );
}