import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Mainpage from "./components/templates/Mainpage";

function Routers() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate replace to="/staking" />} />
      <Route path="/creator" element={<Mainpage />} />
      <Route path="/staking" element={<Mainpage />} />
      <Route path="/dapp" element={<Mainpage />} />
      <Route path="/epoch" element={<Mainpage />} />
    </Routes>
  );
}

export default Routers;
