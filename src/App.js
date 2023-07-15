import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import MenuSection from './app/component/menu-section';


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<MenuSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
