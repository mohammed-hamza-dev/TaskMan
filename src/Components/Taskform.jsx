import React, { useState } from 'react'                         // Import React and useState hook

export default function Taskform() {                            // Create Taskform component

    const [task, setTask] = useState('');                       // Store the task entered by the user
    const [priority, setPriority] = useState('Medium');         // Store the selected priority
    const [category, setCategory] = useState('General');        // Store the selected category

    return (                                                     // Return the UI of the component

        <form className='taskform'>                              {/* Main form container */}

            <br></br>                                            {/* Add a line break */}

            <div id="input">                                     {/* Container for input and button */}

                <input
                    type="text"                                 // Input accepts text
                    placeholder='Enter your task here'          // Text shown when input is empty
                    value={task}                                 // Connect input with task state
                    onChange={(e) => setTask(e.target.value)}    // Update task state when user types
                />

                <span>                                          {/* Container for button */}
                    <button type='submit'>Add Task</button>      {/* Button to submit the task */}
                </span>

                <h2>
                    Task: {task} {priority} - {category}         {/* Display task details */}
                </h2>

            </div>

            <div id="btns">                                      {/* Container for dropdowns */}

                <select
                    value={priority}                             // Connect dropdown with priority state
                    onChange={(e) => setPriority(e.target.value)} // Update priority when selected
                >

                    <option value="high">High</option>           {/* High priority option */}
                    <option value="medium">Medium</option>       {/* Medium priority option */}
                    <option value="low">Low</option>             {/* Low priority option */}

                </select>

                <select
                    value={category}                             // Connect dropdown with category state
                    onChange={(e) => setCategory(e.target.value)} // Update category when selected
                >

                    <option value="general">General</option>     {/* General category option */}
                    <option value="work">Work</option>           {/* Work category option */}
                    <option value="personal">Personal</option>   {/* Personal category option */}

                </select>

            </div>

        </form>
    )
}