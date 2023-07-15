import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import MenuSection from './app/component/menu-section';
import TimeMAN from './app/pages/time-MAN';


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<MenuSection />} />
        <Route exact path="/time-MAN" element={<TimeMAN />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
