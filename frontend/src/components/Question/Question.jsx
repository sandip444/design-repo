import React,{useState} from 'react'
import './Question.css';
import { IoMdAdd } from "react-icons/io";
import { question_list } from '../../assets/assets';
import { MdArrowForwardIos } from 'react-icons/md';
import LoadMoreIcon from "../../icons/loadmoreicon.svg";
import moreicon from "../../icons/Vector.svg";
import Starbg from "../../icons/stars.svg";


const Question = () => {
  const [Enabled, setEnabled] = useState(3);
  const [isReadMore, setIsReadMore] = useState(false);

  const handleButton=()=>{
    setEnabled(Enabled === 7 ? 3 : 7);
    setIsReadMore(!isReadMore);
  }
  return (
    <div className="question" style={{backgroundColor:" rgba(250, 250, 250, 1)" }}>
      <h1>Frequently Asked Questions</h1>
      <div className="question-container" style={{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"-70px"}} >
        {question_list.map((item, index) => (
          (index < Enabled) && (
            <div
              className={`question-box ${index === 2 && !isReadMore ? 'low-opacity' : ''}`} style={{width:"50%",margin:"0 auto"}}
              key={index}
            >
              <p>{item.question}</p>
              <span><IoMdAdd /></span>
            </div>
          )
        ))}
        {/* <button >Read More</button> */}


        <div className="PortfolioBtn" style={{ display: "flex", justifyContent: "center" }}>
         <button onClick={handleButton} style={{padding:"4px 8px 4px 16px",backgroundColor:"#111522",fontSize:"16px",lineHeight:"20px",fontWeight:"700px",display:"flex",gap:"6px", backgroundImage:`url(${Starbg})`}}
          // className="view-all-button bg-black text-white py-2 px-4 rounded-full relative z-10 mx-auto block md:inline-block"
          >
            Load More <img src={moreicon} style={{ stroke: "#FFF", }}></img>
            {/* <span className="ml-2"></span> */}
            </button>
           
         </div>
      </div>
    </div>
  )
}

export default Question
{/* </img><img src={Starbg} style={{ stroke: "#FFF", }}></img> */}