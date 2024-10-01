import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuSection from './app/component/menu-section';
import TimeMAN from './app/pages/time-MAN';
import MathPage from './app/pages/math';
import CardPage from './app/pages/cardPage';
import GridSlider from './app/pages/gridSlider';
import AddEditDelete from './app/pages/addEditDelete';
import TabSection from './app/pages/tab-section';
import CascadingDropdown from './app/pages/cascadingDropdown';
import PropsUse from './app/component/props/propsUse';
import TextForm from "./app/component/StateAndEvents/TextForm";


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<MenuSection />} />
        <Route exact path="/time-MAN" element={<TimeMAN />} />
        <Route exact path="/math" element={<MathPage />} />
        <Route exact path="/cardPage" element={<CardPage />} />
        <Route exact path="/gridSlider" element={<GridSlider />} />
        <Route exact path="/AddEditDelete" element={<AddEditDelete />} />
        <Route exact path="/TabSection" element={<TabSection />} />
        <Route exact path="/CascadingDropdown" element={<CascadingDropdown />} />
        <Route exact path="/PropsUse" element={<PropsUse />} />
        <Route exact path="/TextForm" element={<TextForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
