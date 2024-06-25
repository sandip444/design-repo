import React,{useState} from 'react'
import './Question.css';
import { IoMdAdd } from "react-icons/io";
import { question_list } from '../../assets/assets';


const Question = () => {
  const [Enabled, setEnabled] = useState(3);
  const [isReadMore, setIsReadMore] = useState(false);

  const handleButton=()=>{
    setEnabled(Enabled === 7 ? 3 : 7);
    setIsReadMore(!isReadMore);
  }
  return (
    <div className="question">
      <h1>Frequently Asked Questions</h1>
      <div className="question-container">
        {question_list.map((item, index) => (
          (index < Enabled) && (
            <div
              className={`question-box ${index === 2 && !isReadMore ? 'low-opacity' : ''}`}
              key={index}
            >
              <p>{item.question}</p>
              <span><IoMdAdd /></span>
            </div>
          )
        ))}
        <button onClick={handleButton}>Read More</button>
      </div>
    </div>
  )
}

export default Question
