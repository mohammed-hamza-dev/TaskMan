import React from 'react';


// Progresstracker component - displays task completion progress
export default function Progresstracker({ tasks }) {

  // Calculate completed tasks, total tasks and progress percentage
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;


  // Return - displays the progress tracker
  return (
    <div className="progresstracker">

      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div className="progressbar">

        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

    </div>
  );
}