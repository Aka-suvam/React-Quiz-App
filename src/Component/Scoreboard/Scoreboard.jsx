
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import './Scoreboard.css';



const Scoreboard = ({Score,Totalscore}) => {
  
  const percentage = (Score / Totalscore) * 100;
let svg;
if (percentage === 100) svg = "🥇";
if (percentage >= 50 && percentage < 100) svg = "🎉";
if (percentage === 0 || percentage <50) svg = "🤦‍♂️";

  return (
    <div className='scoreboard'>
      <h1 className='result'>Your Result</h1>
      <h1 className='score'>You Score  {Score}  out of {Totalscore}</h1>
     <div className='svg'>
      {svg}
     </div>
      
<div className='circularprogess'>
<CircularProgressbar value={percentage} text={`${percentage}%`}  /> 

</div>
<Link to='/'>
<button  className='start-btn try'>Try Again </button> </Link>
    </div>
  )
}

export default Scoreboard
