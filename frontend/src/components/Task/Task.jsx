import React from 'react';
import './Task.css';
import { task_list } from '../../assets/assets';

const Task = () => {
  return (
    <div className="py-4 shadow-custom rounded-3xl border-[#E5E6EC] mb-4 flex flex-wrap justify-center mx-8">
      {task_list.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h1 className="text-xl font-semibold">{item.task_number}</h1>
          <h1 className="text-md font-red-rose text-[#6F6C90] text-center">{item.task_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Task;
