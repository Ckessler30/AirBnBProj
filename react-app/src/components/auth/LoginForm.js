import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import {AiOutlineClose} from 'react-icons/ai'
import { errorHandler } from '../utils';
import {AiOutlineEllipsis} from 'react-icons/ai'
import './LoginForm.css'

const LoginForm = ({setOpenLogin}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const[emailInput, setEmailInput] =useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }else{

      setOpenLogin(false)
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

   const handleDemoLogin = () => {
     dispatch(login("demo@aa.io", "password"));
     setOpenLogin(false)
   };

  // if (user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <div className="loginForm">
      <div className="loginFormInner">
        <div className="login-top">
          <AiOutlineClose
            onClick={() => setOpenLogin(false)}
            className="close-btn"
          />
          <p>Login</p>
        </div>

        <form onSubmit={onLogin} className="login-boxes">
          <div className="welcome-bbnb">
            <p className="welcome-p">Welcome to Bearbnb</p>
          </div>
          <div>
            {errors.map((error, ind) => (
              <div key={ind} className="login-err">
                {error.split(":")[1]}
              </div>
            ))}
          </div>
          <div className="login-inputs">
            <div className="input-email">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                placeholder="example@email.com"
                value={email}
                onChange={updateEmail}
                // required
              />
            </div>
            <div className="input-pass">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
                // required
              />
            </div>
          </div>
          <div className="login-bottom">
            <div className="login-demo-btn" onClick={handleDemoLogin}>
              <AiOutlineEllipsis className="elips" />
              <p>Demo User</p>
              <AiOutlineEllipsis className="elips" />
            </div>
            <button className="reserve-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
