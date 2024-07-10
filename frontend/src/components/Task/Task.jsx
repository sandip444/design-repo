import React from 'react';
import './Task.css';
import { task_list } from '../../assets/assets';
import CircleNumber from "../../assets/circlebg.png";

const Task = () => {
  return (
    <div className="spacing py-8 rounded-3xl flex flex-wrap justify-center mx-8 relative" style={{border: "0.5px solid #E5E6EC"}}>
      {task_list.map((item, index) => (
        <div
          key={index}
          className={`spacing flex-1 flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/4 px-4 relative flexWrap ${index !== task_list.length - 1 ? 'border-right' : '1px solid #E5E6EC'

            }`}
        >
          <div className="relative flex items-center justify-center w-full">
            <img src={CircleNumber} alt="" className="circle-bg absolute" />
            <h1 className="text-xl font-semibold relative">{item.task_number}</h1>
          </div>
          <h1 className="text-md font-inter text-[#6F6C90] text-center" style={{fontWeight:"400",fontSize:"18px",lineHeight:"25px",color:"#6F6C90"}}>{item.task_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Task;
