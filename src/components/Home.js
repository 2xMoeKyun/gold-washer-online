import React from 'react';
import './styles/Home.css';


function Home() {
  return (
    <div className="Home">
      <header className='main_header'>
        <nav className='main_nav'>
           <button className='custom-btn nav_login'>Войти</button>
           <button className='custom-btn nav_register'>Присоеденится</button>
        </nav>
      </header>
    </div>
  );
}

export default Home;

