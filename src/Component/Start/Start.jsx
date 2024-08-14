import { Link } from "react-router-dom";
import { data } from "../../ulits/data.js";
import './Start.css';

const Start = () => {
  return (
    <div className='start'>
      <h2 className="start-heading">Welcome to The React Quiz!</h2>
      <p className="para"> {data.length} questions to test your React mastery</p>
      <p className="time"> Time : <span className="minute">1</span>minute: <span className="second">10</span>second</p>
      <Link to= {'/quiz'} className="link"> <button className='start-btn'>Start</button>
      </Link>
    </div>
  )
}

export default Start;
