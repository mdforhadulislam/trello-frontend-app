import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Nav/Navbar.jsx';
import localStorageToGetTokenUser from '../hooks/getLocalStore.js';

function App({children}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    const token = localStorageToGetTokenUser()
    dispatch({type:"ADD_TOKEN",payload:{token:token}})
  })
    return (
      <div className="w-full h-auto">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    );
}

export default App;