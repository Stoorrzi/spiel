import { useState } from "react";
import "./Game_Easy.css";

export default function Game_Easy({
  frageEasy,
  aufgabeEasy,
  antwortEasy,
  richtigeAntwort,
  easyIMG,
  easyIndex,
  easy,
  weiter,
  back,
}) {
  const [frageFeld, setFrageFeld] = useState(false);

  function checkAnswer(x) {
    if (x === richtigeAntwort) {
      alert("richtig");
      weiter();
    } else {
      alert("Antwort falsch");
    }
  }

  if (frageFeld) {
    return (
      <div className="D171">
        <img
          className="IMG5"
          src={"/images/hilfe_background.svg"}
          alt="Fragezeichen"
        />
        <div className="D17">
          <div className="D18">
            <p className="P13">Hilfe</p>
          </div>
          <div className="D19">
            <p className="P14">Hier kommt die Hilfe</p>
          </div>
        </div>
        <button
          onClick={() => {
            setFrageFeld(false);
          }}
        >
          <img className="IMG6" src={"/images/back.svg"} alt="Fragezeichen" />
        </button>
      </div>
    );
  }

  return (
    <div className="D15">
      <p1 className="H12">{frageEasy}</p1>
      <p>{aufgabeEasy}</p>
      <div className="D16">
        <button
          className="B12"
          onClick={() => {
            checkAnswer(1);
          }}
        >
          {antwortEasy[0]}
        </button>
        <button
          className="B12"
          onClick={() => {
            checkAnswer(2);
          }}
        >
          {antwortEasy[1]}
        </button>
        <button
          className="B12"
          onClick={() => {
            checkAnswer(3);
          }}
        >
          {antwortEasy[2]}
        </button>
        <button
          className="B12"
          onClick={() => {
            checkAnswer(4);
          }}
        >
          {antwortEasy[2]}
        </button>
      </div>
      <button
        onClick={() => {
          setFrageFeld(true);
        }}
      >
        <img className="IMG4" src={"/images/frage.svg"} alt="Fragezeichen" />
      </button>
      <button
        className="B111"
        onClick={() => {
          back();
        }}
      >
        Zurück
      </button>
    </div>
  );
}
