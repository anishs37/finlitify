import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
//import Welcome from './components/welcome';
import Home from './components/HomePage';
import About from './components/About';
import Menu1 from './components/MenuPage1';
import Menu2 from './components/MenuPage2';
import Menu3 from './components/MenuPage3';
import NoPage from './components/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/menu1" element={<Menu1 />} />
          <Route path="/menu2" element={<Menu2 />} />
          <Route path="/menu3" element={<Menu3 />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
