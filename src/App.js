import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/funVsClass/function')
    // eslint-disable-next-line
  },[])
  return (
    <>
      <Nav />
      <div className='container w-75 mt-4'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
