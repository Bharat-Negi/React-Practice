import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuSection from './app/component/menu-section';
import TimeMAN from './app/pages/time-MAN';
import MathPage from './app/pages/math';
import CardPage from './app/pages/cardPage';
import GridSlider from './app/pages/gridSlider';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<MenuSection />} />
        <Route exact path="/time-MAN" element={<TimeMAN />} />
        <Route exact path="/math" element={<MathPage />} />
        <Route exact path="/cardPage" element={<CardPage />} />
        <Route exact path="/gridSlider" element={<GridSlider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
