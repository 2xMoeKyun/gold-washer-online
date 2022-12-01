import React from 'react';
import Home from './components/Home';
import Register from './components/Register';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/register' element={<Register/>} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
