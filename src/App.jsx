import { Outlet } from 'react-router-dom';
import Header from './Component/Header/Header.jsx';

function App() {

  return (
   
      <div className='app'>
        <Header/>
        <Outlet/>
        
        
      </div>
     
      
  )
}

export default App
