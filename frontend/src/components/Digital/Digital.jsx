import React from 'react';
import './Digital.css';
import { digital_list } from '../../assets/assets';

const Digital = () => {
  return (
    <div className="digital bg-[#FAFAFA]">
      <h1 className="text-3xl md:text-5xl text-center mt-8 mb-6">
        Empower your digital transformation with innovative solutions and expert guidance.
      </h1>

      <div className="digital-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-2">
        {digital_list.map((item, index) => (
          <div className="digital-box bg-white rounded-lg shadow-md overflow-hidden" key={index}>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1 text-left">{item.name}</h2>
              <p className="text-gray-600 text-left">{item.description}</p>
            </div>
            <div className="digital-img flex items-center justify-center">
              <img src={item.img} alt="Digital transformation" className="object-cover h-full w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digital;
