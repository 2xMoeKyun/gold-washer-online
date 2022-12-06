import React from 'react';
import './styles/Home.css';
import {useState} from 'react'


function AddHref(href){
  window.location.href = href
} 

function Home(user) {  
  return (
    <div className="Home">
      <header className='main_header'>
        <div><h3>User: {user}</h3></div>
        <nav className='main_nav'>        
          <button onClick={() => AddHref('/login')} className='custom-btn nav_login'>Войти</button>
          <button onClick={() => AddHref('/register')} className='custom-btn nav_register'>Присоеденится</button>
        </nav>
      </header>
    </div>
  );
}

export default Home;

