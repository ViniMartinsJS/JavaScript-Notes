import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home";

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
