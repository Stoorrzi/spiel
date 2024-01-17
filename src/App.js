import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Start/Start";
import Game from "./Game/Game";
import Settings from "./Settings/Settings";
import { useState } from "react";

export default function App() {
  const [prolog, setProlog] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start setProlog={setProlog} />} />
        <Route
          path="/game"
          element={<Game prolog={prolog} setProlog={setProlog} />}
        />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
