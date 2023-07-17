import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import MenuSection from './app/component/menu-section';
import TimeMAN from './app/pages/time-MAN';
import MathPage from './app/pages/math';
import CardPage from './app/pages/cardPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<MenuSection />} />
        <Route exact path="/time-MAN" element={<TimeMAN />} />
        <Route exact path="/math" element={<MathPage />} />
        <Route exact path="/cardPage" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
