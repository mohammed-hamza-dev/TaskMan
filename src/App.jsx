import React from 'react'
import Taskform from './Components/Taskform'
import Progresstracker from './Components/Progresstracker'
import Tasklist from './Components/Tasklist'

export default function App() {
  return (
    <div>
      <h1>TaskMan</h1>
      <p><i>Your Task manager !</i></p>

      <Taskform />
      <Progresstracker />
      <Tasklist />

    </div>
  )
}

