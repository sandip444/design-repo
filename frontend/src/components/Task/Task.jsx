import React from 'react'
import './Task.css'
import { task_list } from '../../assets/assets'

const Task = () => {
  return (
    <div className="task">
      <div className="task-container">

        {task_list.map((item, index) => {
          return (
            <div className="task-box">
              <h1>{item.task_number}</h1>
              <h1>{item.task_name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Task
