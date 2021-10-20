
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  const [openDropDown, setOpenDropDown] = useState(false)
  return (
    <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/become-a-host" exact={true} activeClassName="active">
              Become a host
            </NavLink>
          </li>
          <li className="nav-login-signup">
            <div onClick={()=>setOpenDropDown(!openDropDown)}>
              <p>Profile</p>
            </div>
            {openDropDown &&
            <div className="profile-drop-down">
               { !sessionUser ? (
                  <NavLink to="/login" exact={true} activeClassName="active">
                    Login
                  </NavLink>
                ) : (
                    <LogoutButton />
                )}
                {!sessionUser &&
                    <NavLink to="/sign-up" exact={true} activeClassName="active">
                      Sign Up
                    </NavLink> 
                }
            </div>
            }
          </li>
          
        </ul>
    </nav>
  );
}

export default NavBar;
