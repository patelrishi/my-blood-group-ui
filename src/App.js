
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Menu } from './Menu/Menu';
import { Login } from './Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
 const dispatch = useDispatch();

  useEffect(()=>{
    if(typeof window !== 'undefined' && sessionStorage?.user){
    dispatch({type:'LOGIN', payload:{isLogIn: true,user:sessionStorage?.user }})//refresh also page keep login 
    }
  },[dispatch])

  const isLoggedin = useSelector((state) => {
    return state.appReducer.isLogIn
  })
  
  return (
    <div>
      <BrowserRouter>
        {isLoggedin ? < Menu /> : <Login />}
      </BrowserRouter>
    </div>
  );
}

export default App;
