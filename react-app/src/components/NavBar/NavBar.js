
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
          <NavLink className="inactive" to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        {sessionUser && (
          <li>
            <NavLink className="inactive" to="/become-a-host" exact={true} activeClassName="active">
              Become a host
            </NavLink>
          </li>
        )}
        <li className="nav-login-signup">
          <div onClick={() => setOpenDropDown(!openDropDown)}>
            <p>Profile</p>
          </div>
          {openDropDown && (
            <div className="profile-drop-down">
              {!sessionUser ? (
                <div>
                  <NavLink to="/login" className="inactive" exact={true} activeClassName="active">
                    Login
                  </NavLink>
                  <NavLink to="/sign-up" className="inactive" exact={true} activeClassName="active">
                    Sign Up
                  </NavLink>
                  <button onClick={handleDemoLogin}>Demo</button>
                </div>
              ) : (
                <div>
                  <NavLink className="inactive" to={`/users/${sessionUser.id}`}>My Profile</NavLink>
                  <NavLink className="inactive" to={`/users/${sessionUser.id}/bookings`}>
                    Trips
                  </NavLink>
                  <LogoutButton />
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
