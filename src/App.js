import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from './component/header/Header';
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
    </div>
  );
}

export default App;
