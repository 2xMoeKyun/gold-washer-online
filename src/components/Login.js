import React from 'react';
import { flushSync } from 'react-dom';
import Home from './Home'
//import './styles/Login.css';


function Submit(href){
    fetch('', {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify() 
    });
  window.location.href = href
}

function Login() {
  return (
    <div className="Login">     
      <input type='text' value="login" />
      <input type='text' value='password' />
      <button onClick={() => Submit('/')}>Submit</button>
    </div>
  );
}

export default Login;