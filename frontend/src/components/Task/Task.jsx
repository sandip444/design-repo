import React from 'react';
import './Task.css';
import { task_list } from '../../assets/assets';
import CircleNumber from "../../assets/circlebg.png";

const Task = () => {
  return (
    <div className="py-8 shadow-custom rounded-3xl border-[#E5E6EC] flex flex-wrap justify-center mx-8 relative">
      {task_list.map((item, index) => (
        <div
          key={index}
          className={`spacing flex-1 flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/4 px-4 relative flexWrap ${index !== task_list.length - 1 ? 'border-right' : ''

            }`}
        >
          <div className="relative flex items-center justify-center w-full">
            <img src={CircleNumber} alt="" className="circle-bg absolute" />
            <h1 className="text-xl font-semibold relative">{item.task_number}</h1>
          </div>
          <h1 className="text-md font-red-rose text-[#6F6C90] text-center">{item.task_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Task;
