import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './index.css';

const App = () => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </MemoryRouter>
);

export default App;
