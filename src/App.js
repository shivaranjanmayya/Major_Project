//import logo from './logo.svg';
//import './App.css';
import './default.scss';
import React from 'react';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Registration from './Pages/Registration';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Header />
      <div className='main'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/registration" element={<Registration />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
