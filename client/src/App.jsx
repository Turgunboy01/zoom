import React from "react";
import { Route, Routes } from "react-router-dom";
import Lobby from "./screens/Lobby";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />} />
        {/* salom */}
      </Routes>
    </div>
  );
};

export default App;
