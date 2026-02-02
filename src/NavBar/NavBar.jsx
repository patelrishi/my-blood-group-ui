
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useState } from 'react';

export const NavBar = () => {
  const [list, setList] = useState(false)
  const dispatch = useDispatch()
    
  //logout func
  const handleLogOut = () => {
    sessionStorage.clear()
    dispatch({ type:"LOGIN", payload:{isLogIn: false}})
  }
  return (
    <div>
      <nav className='navbar'>
           <div className={`list_items ${list ?'open' :''}`}> {/*means laptop view work proper if open mobile view listitems not appear whenever click 3lines it is true when list_items.open css work so open listitems */}
            <NavLink to='/'>Home</NavLink>
            <NavLink to='Register'>Register</NavLink>
            <NavLink to='GetDonars'>Donors</NavLink>
          </div>
        
        <span className='title'> My Blood Group </span>
        <span onClick={() => setList(!list)} className='hamburger_icon'><i className="fa-solid fa-bars"></i></span>
        <button className='nav_btn' onClick={handleLogOut}>Logout</button>
      </nav>

    </div>
  )
}
