import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./components/templates/Mainpage";

function Routers() {
  return (
    <Routes>
      <Route path="/*" element={<Mainpage />} />
    </Routes>
  );
}

export default Routers;
