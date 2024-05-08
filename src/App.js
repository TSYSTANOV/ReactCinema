import "./style/style.css";
import React from "react";
import { MainPageHeader } from "./Components.js/MainPageHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./Components.js/MainPage";
import { Search } from "./Components.js/Search";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageHeader />}>
          <Route index element={<MainPage />} />
          <Route path="search/:searchParam" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
