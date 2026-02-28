import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from './Firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login ()
{ const [email, setEmail]=useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
    const signIn = (e) =>
    {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>
        { 
          if (userCredential)
          navigate('/')
        })
      .catch ((error)=>alert(error.message))
    };
    const register = (e) =>
    {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) =>
        { 
          if (userCredential)
          navigate('/')
        })
        .catch((error) =>
        {
          const errormessage = error.message;
          alert(errormessage);
})
    };
    return (
      <div className="login">
        <Link to='/'>
        <img
          className="login__logo"
          src="https://cdn.iconscout.com/icon/free/png-512/free-amazon-1869030-1583154.png?f=webp&w=512"
          alt="amazon"
        />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={signIn}
              className="login__signInButton"
              type="submit"
            >
              Sign-in
            </button>
          </form>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale.Please see our Privacy Notice, Cookies and Interest-Based Ads
            Notice.
          </p>
          <button onClick={register} className="login__registrationButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    );
};

export default Login;
