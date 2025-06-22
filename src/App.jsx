import React from "react";
import { Route, Routes } from "react-router-dom";
import Room from "./components/Room.jsx";
import Home from "./components/Home.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomID" element={<Room />} />
    </Routes>
  );
};

export default App;
