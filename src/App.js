import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from './component/header/Header';
import { Footer } from './component/footer/Footer';
import { Counter } from './features/counter/Counter';
import { Home } from './features/home/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
