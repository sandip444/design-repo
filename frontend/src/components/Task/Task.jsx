import React from 'react'
import './Task.css'
import { task_list } from '../../assets/assets'

const Task = () => {
  return (
    <div className="py-4 shadow-custom rounded-3xl border-[#E5E6EC] mb-4 flex flex-row w-90% h-32 mx-8 ">
      {task_list.map((item, index) => {
        return (
          <div key={index} className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold">{item.task_number}</h1>
            <h1 className="text-lg font-inter text-[#6F6C90]">{item.task_name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Task
