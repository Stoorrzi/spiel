import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Start/Start";
import Game from "./Game/Game";
import Settings from "./Settings/Settings";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
  );
}