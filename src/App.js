import React from 'react';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'; 
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

function App() {
  var [user, setUser] = useState('None');
  return (
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/login' element={<Login/>} exact />
          <Route path='/register' element={<Register/>} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
