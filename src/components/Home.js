import React from 'react';
import './styles/Home.css';


function Home() {
  return (
    <div className="Home">
      <header className='main_header'>
        <nav className='main_nav'> 
          <form className='form-custom-btn'>         
            <button className='custom-btn nav_login'>Войти</button>
          </form>         
          <form action="/register" className='form-custom-btn'>
            <button className='custom-btn nav_register'>Присоеденится</button>
          </form>
        </nav>
      </header>
    </div>
  );
}

export default Home;

