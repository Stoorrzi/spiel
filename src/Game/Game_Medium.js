import { useState } from "react";
import "./Game_Easy.css";

export default function Game_Medium() {
  const [frage, setFrage] = useState(true);
  const [antwort, setAntwort] = useState(false);
  const [frageFeld, setFrageFeld] = useState(false);

  const [textInput, setTextInput] = useState("");

  const fragen = [
    "Wir zerstören die Erde in 001001101 Tagen. Wenn ihr nicht in 110011 Tagen 0011011 Tonnen Gold zum Planeten Slawp sendet. LG",
  ];
  const fragen_2 = ["Verfolständige das Programm"];
  const textTop = [
    [
      "Kurskorrektur.exe",
      <br />,
      <br />,
      "Main[",
      <br />,
      <br />,
      <br />,
      "//Definiere deine Variablen hier:",
    ],
  ];
  const textBottom = [
    [
      <br />,
      "function KursCorrection {",
      <br />,
      "newKurs=Kurs(x, y, z)",
      <br />,
      "send newKurs to Kommandozentrale",
      <br />,
      <br />,
      "if KursCorrection == True {",
      <br />,
      "return String:”Erfolgreiche Korrektur”",
      <br />,
      "}",
      <br />,
      "else {",
      <br />,
      "return String:”Korrektur fehlgeschlagen”",
      <br />,
      "}",
      <br />,
      <br />,
      "}",
      <br />,
      "]",
    ],
  ];

  const antwortText = ["int x = 80;\nint y = 80;"]

  function checkAnswer() {
    console.log(antwortText[0])
    console.log(textInput)
    if (textInput.localeCompare(antwortText[0]) === 0) {
        alert("richtig")
        
    } else {
        alert("antwort falsch")
    }
    
  }

  if (frage) {
    return (
      <div>
        <img className="IMG3" src={"/images/frage_medium.svg"} alt="Labor" />
        <div className="D14">
          <div className="D23">
            <h1 className="H12">!Achtung!</h1>
            <p className="P12">{fragen[0]}</p>
          </div>
        </div>
        <button
          className="B11"
          onClick={() => {
            setFrage(false);
            setAntwort(true);
          }}
        >
          Weiter
        </button>
      </div>
    );
  }

  if (antwort) {
    return (
      <div className="D25">
        <p1 className="H12" style={{ marginBottom: "1rem" }}>
          {fragen_2[0]}
        </p1>
        <div className="D21">
          <p style={{ fontSize: "2.5rem", marginLeft: "1rem" }}>{textTop[0]}</p>
          <textarea
            className="In1"
            type="text"
            id="feld"
            onChange={(e) => {
              setTextInput(e.target.value)
              console.log(textInput);
            }}
          />
          <p style={{ fontSize: "2.5rem", marginLeft: "1rem" }}>
            {textBottom[0]}
          </p>
        </div>
        <button
          className="B11"
          onClick={() => {
            checkAnswer();
          }}
        >
          Fertig
        </button>

        <button
          onClick={() => {
            setAntwort(false);
            setFrageFeld(true);
          }}
        >
          <img className="IMG4" src={"/images/frage.svg"} alt="Fragezeichen" />
        </button>
      </div>
    );
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
            setAntwort(true);
          }}
        >
          <img className="IMG6" src={"/images/back.svg"} alt="Fragezeichen" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
