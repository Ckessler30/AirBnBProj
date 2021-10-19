
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  console.log(sessionUser)
  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          </li>
          <li className="nav-login-signup">
            {!sessionUser ? (
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
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
