import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Start/Start";
import Game from "./Game/Game";
import Settings from "./Settings/Settings";
import Game_Medium from "./Game/Game_Medium";
import { useState } from "react";

export default function App() {
  const [prolog, setProlog] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/game"
          element={<Game prolog={prolog} setProlog={setProlog} />}
        />
        {/* <Route path="/medium" element={<Game_Medium />} /> */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
