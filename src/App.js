import "./style/style.css";
import React from "react";
import { MainPageHeader } from "./Components.js/MainPageHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./Components.js/MainPage";
import { Search } from "./Components.js/Search";
import { Categories } from "./Components.js/Categories";
import { NoWay } from "./Components.js/NoWay";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageHeader />}>
          <Route index element={<MainPage />} />
          <Route path="search/:searchParam" element={<Search />} />
          <Route path="category/:searchParam" element={<Categories />} />
          <Route path="*" element={<NoWay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
