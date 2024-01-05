import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Start/Start";
import Game from "./Game/Game";
import Settings from "./Settings/Settings";
import Game_Medium from "./Game/Game_Medium";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/medium" element={<Game_Medium />} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
  );
}