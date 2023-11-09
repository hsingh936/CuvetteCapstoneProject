import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Genre from "./pages/Genre";
import Browse from './pages/Browse'

import React from "react";
import Movies from "./pages/Movies";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genre" element={<Genre />} />
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/movies' element={<Movies/>}/>

      </Routes>
    </>
  );
};

export default App;