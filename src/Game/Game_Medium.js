import { useState } from "react";
import "./Game_Easy.css";

export default function Game_Medium({
  frageMedium,
  aufgabeMedium,
  topText,
  bottomText,
  richtigeAntwortMedium,
  mediumIMG,
  medium,
  weiter,
  back,
  hilfe,
  hilfeIMG
}) {
  const [frageFeld, setFrageFeld] = useState(false);
  const [alertBox, setAlertBox] = useState(false);
  const [alertBoxFalsch, setAlertBoxFalsch] = useState(false);

  const [textInput, setTextInput] = useState("");

  function checkAnswer() {
    console.log(richtigeAntwortMedium);
    let answer = textInput.replace(/\s/g, '');
    answer = answer.replace(/"/g, "'");
    console.log(answer)
    if (answer.localeCompare(richtigeAntwortMedium) === 0) {
      setAlertBox(true)
    } else {
      setAlertBoxFalsch(true)
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
            <p className="P13">Information</p>
          </div>
          <div className="D19">
            <img className="IMG7" src={hilfeIMG} alt="HelpIMG" />
            <p className="P14">{hilfe}</p>
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
    <div className="D25">
      <p1 className="H12" style={{ marginBottom: "1rem" }}>
        {frageMedium}
      </p1>
      <p className="P15">{aufgabeMedium}</p>
      <div className="D21">
        <p
          style={{
            fontSize: "1.5rem",
            marginLeft: "1rem",
            whiteSpace: "pre-line",
          }}
        >
          {topText}
        </p>
        <textarea
          className="In1"
          type="text"
          id="feld"
          onChange={(e) => {
            setTextInput(e.target.value);
            console.log(textInput);
          }}
        />
        <p
          style={{
            fontSize: "1.5rem",
            marginLeft: "1rem",
            whiteSpace: "pre-line",
          }}
        >
          {bottomText}
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
        className="B111"
        onClick={() => {
          back();
        }}
      >
        Zurück
      </button>
      <button
        onClick={() => {
          setFrageFeld(true);
        }}
        className="IMG4"
      >
        <img className="IMG41" src={"/images/frage.svg"} alt="Fragezeichen" />
      </button>
      {alertBox ? (
        <>
          <div className="AD1">
            <div className="AD2">
              <p className="AP1">
                Klasse, diese Aufgabe hast du richtig bearbeitet
              </p>
              <button
                className="AB1"
                onClick={() => {
                  weiter();
                  setAlertBox(false)
                }}
              >
                Weiter
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {alertBoxFalsch ? (
        <>
          <div className="AD1">
            <div className="AD21">
              <p className="AP1">
                Deine Antwort ist leider Falsch!
              </p>
              <button
                className="AB1"
                onClick={() => {
                  setAlertBoxFalsch(false)
                }}
              >
                OK
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
