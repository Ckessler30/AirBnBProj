
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { login } from '../../store/session';

import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [openDropDown, setOpenDropDown] = useState(false)
  // console.log(sessionUser)
  const handleDemoLogin = () => {
    dispatch(login("demo@aa.io", "password"))
  }
  return (
    <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/become-a-host" exact={true} activeClassName="active">
              Become a host
            </NavLink>
          </li> */}
          <li className="nav-login-signup">
            <div onClick={()=>setOpenDropDown(!openDropDown)}>
              <p>Profile</p>
            </div>
            {openDropDown &&
            <div className="profile-drop-down">
               { !sessionUser ? (
                 <div>
                  <NavLink to="/login" exact={true} activeClassName="active">
                    Login
                  </NavLink>
                    <NavLink to="/sign-up" exact={true} activeClassName="active">
                      Sign Up
                    </NavLink> 
                    <button onClick={handleDemoLogin}>Demo</button>
                 </div>
                ) : (
                    <div>
                      <a href={`/users/${sessionUser.id}`}>My Profile</a>
                      <a href={`/users/${sessionUser.id}/bookings`}>Trips</a>
                      <LogoutButton />
                    </div>
                )}
            </div>
            }
          </li>
          
        </ul>
    </nav>
  );
}

export default NavBar;
