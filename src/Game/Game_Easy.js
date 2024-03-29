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
  hilfe,
  hilfeIMG,
}) {
  const [frageFeld, setFrageFeld] = useState(false);
  const [alertBox, setAlertBox] = useState(false);
  const [alertBoxFalsch, setAlertBoxFalsch] = useState(false);

  function checkAnswer(x) {
    if (x === richtigeAntwort) {
      setAlertBox(true);
    } else {
      setAlertBoxFalsch(true);
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
          
            {hilfeIMG ? (
              <div className="D19">
              <img className="IMG7" src={hilfeIMG} alt="HelpIMG" />,
              <p className="P14">{hilfe}</p>
              </div>
            ) : (
              <div className="D19">
              <p className="P141">{hilfe}</p>
              </div>
            )}
          
        </div>
        <button
          onClick={() => {
            setFrageFeld(false);
          }}
        >
          <img className="IMG6" src={"/images/back.svg"} alt="Zurück" />
        </button>
      </div>
    );
  }
  

  return (
    <div className="D15">
      <p1 className="H12">{frageEasy}</p1>
      <p className="P15">{aufgabeEasy}</p>

      <div className="D16">
        <div className="D161">
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
        </div>
        <div className="D162">
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
            {antwortEasy[3]}
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          setFrageFeld(true);
        }}
        className="IMG4"
      >
        <img className="IMG41" src={"/images/frage.svg"} alt="Fragezeichen" />
      </button>
      <button
        className="B111"
        onClick={() => {
          back();
        }}
      >
        Zurück
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
                  setAlertBox(false);
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
              <p className="AP1">Deine Antwort ist leider Falsch!</p>
              <button
                className="AB1"
                onClick={() => {
                  setAlertBoxFalsch(false);
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
