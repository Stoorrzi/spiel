import "./Start.css";
import { useNavigate } from "react-router-dom";

export default function Start_Choose({setProlog}) {
  const navigate = useNavigate();

  const newGame = () => {
    setProlog(true)
    navigate("/game");
  };
  const loadSettings = () => {
    navigate("/settings");
  };
  return (
    <div className="D2">
      <img
        src={"/images//home_background.svg"}
        className="IMG1"
        alt="rocket background"
      />
      <div className="D3">
        <button
          className="B1"
          onClick={() => {
            newGame();
          }}
        >
          <p className="P1">Erstelle ein neues Spiel</p>
        </button>
      </div>
      <div>
        <button
          className="B2"
          onClick={() => {
            loadSettings();
          }}
        >
          <img className="IMG2" src={"/images/settings.svg"} alt="Backgroud Rocket" />
        </button>
      </div>
    </div>
  );
}
