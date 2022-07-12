import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

const App = () => (
  <div>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  </div>
);

export default App;
