import { useEffect, useRef, useState } from 'react';
import { data } from '../../ulits/data.js';
import Timer from '../Timer/Timer.jsx';
import Scoreboard from '../Scoreboard/Scoreboard.jsx';
import './Quiz.css';

const Quiz = () => {
  const [index,setIndex]=useState(0);
  const [question,setQuestion]=useState(data[index]);
  const [lock,setLock]=useState(false);
  const [score,setScore]=useState(0);
  const [quizOver, setQuizOver] = useState(false);
  


  let option1=useRef(null);
  let option2=useRef(null);
  let option3=useRef(null);
  let option4=useRef(null);
 
  let optionarr=[option1,option2,option3,option4];

  let handleAns=(e,ans)=>{
    if(lock===false){
      if(question.ans===ans){
        e.target.classList.add('correct');
        setScore(score+5);
      } else {
        e.target.classList.add('wrong');
        optionarr[question.ans-1].current.classList.add('correct');
      }
      setLock(true);
    }
  }

  let handleNext=()=>{
    if(lock){
      optionarr.forEach((option)=>{
        if(option.current){
          option.current.classList.remove('correct','wrong');
        }
      });
      setLock(false);
      setIndex(index+1);
    }
  }

  const handleTimeUp = () => {
    setQuizOver(true);
  }


  useEffect(()=>{ 
    setQuestion(data[index]);
  },[index]);

  

  return (
    quizOver || index >= data.length ? 
      (<Scoreboard Score={score} Totalscore={5*data.length}  />) :
      (<section className='quiz'>
       
        <div className='flex'>
           <h2 >Question  {index+1}/ {data.length}</h2>
           <h2 className='scroring'> Score:{score}/{data.length*5}</h2> 
        </div>
        <h2 className='question'>{question.question}</h2>
        <ul>
          <li ref={option1} onClick={(e)=>{handleAns(e,1)}}>{question.option1}</li>
          <li ref={option2} onClick={(e)=>{handleAns(e,2)}}>{question.option2}</li>
          <li ref={option3} onClick={(e)=>{handleAns(e,3)}}>{question.option3}</li>
          <li ref={option4} onClick={(e)=>{handleAns(e,4)}}>{question.option4}</li>
        </ul>
        <div className='flex'>
        <Timer   onTimeUp={handleTimeUp}/> 
        {lock ?(<button className='next' onClick={handleNext}>{index<data.length-1?'Next':'Finish'}</button>):(null)}
       
       </div>
      </section>)
  );
}

export default Quiz;
