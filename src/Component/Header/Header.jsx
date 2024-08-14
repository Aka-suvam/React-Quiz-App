import { useLocation } from 'react-router-dom';

import ReactLogo from '../../assets/image/react.svg';
import './Header.css';

const Header = () => {
  const location=useLocation();

  const  Imgclass = location.pathname === ('/quiz') ? 'react-icon' : ' ' ;

  /*location.pathname === ('/start')||  */
  return (
    <header>
      <div className='react-logo-container'>
    <a href="https://react.dev" target="_blank">
    <img src={ReactLogo} className={`${Imgclass} logo`} alt="React logo" />
    </a>
      </div>

    </header>
  )
}

export default Header
