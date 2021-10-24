import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { AiOutlineClose } from "react-icons/ai";
import './SignUpForm.css'

const SignUpForm = ({setOpenSignUp}) => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [bio, setBio] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(
          name,
          email,
          password,
          bio,
          profilePic
            ? profilePic
            : "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg"
        )
      );
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="signUpForm">
      <div className="signUpFormInner">
        <div className="login-top">
          <AiOutlineClose
            onClick={() => setOpenSignUp(false)}
            className="close-btn"
          />
          <p>Sign Up</p>
        </div>
        <form onSubmit={onSignUp}>
          <div className="welcome-bbnb">
            <p className="welcome-p">Welcome to Bearbnb</p>
          </div>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="username"
              onChange={updateName}
              value={name}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div>
            <label>Bio</label>
            <textarea
              name="bio"
              id=""
              cols="30"
              rows="5"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Profile Pic</label>
            <input
              type="text"
              name="profile_pic"
              onChange={(e) => setProfilePic(e.target.value)}
              value={profilePic}
            ></input>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
