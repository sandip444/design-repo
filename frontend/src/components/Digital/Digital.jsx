import React from 'react'
import './Digital.css'
import { digital_list } from '../../assets/assets'

const Digital = () => {
  return (
    <div className="digital">
      <h1>Empower your digital transformation with innovative solutons and expert guidance.</h1>

      <div className="digital-container">
        {digital_list.map((item, index) => (
          <div className="digital-box" key={index}>
            
            <div className="digital-title">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>

            <div className="digital-img">
              <img src={item.img} alt="img" />
            </div>

          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Digital
