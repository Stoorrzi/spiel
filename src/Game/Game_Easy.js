import { useState } from "react";
import "./Game_Easy.css";

export default function Game_Easy() {
  const [prolog, setProlog] = useState(true);
  const [frage, setFrage] = useState(false);
  const [antwort, setAntwort] = useState(false);
  const [frageFeld, setFrageFeld] = useState(false);

  const fragen = [
    "Wir zerstören die Erde in 001001101 Tagen. Wenn ihr nicht in 110011 Tagen 0011011 Tonnen Gold zum Planeten Slawp sendet. LG",
  ];
  const fragen_2 = ["Was ist 110011 als Dezimalzahl?"];
  const antworten = [
    [41, 51, 105, 15],
    [1, 1, 1, 1],
  ];

  if (prolog) {
    return (
      <div className="D11">
        <div className="CoverDiv"></div>
        <img className="IMG2" src={"/images/prolog.svg"} alt="prolog" />
        <div className="D12">
          <h1 className="H11">Prolog</h1>
          <p className="P11">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <button
          className="B11"
          onClick={() => {
            setProlog(false);
            setFrage(true);
          }}
        >
          Weiter
        </button>
      </div>
    );
  }

  if (frage) {
    return (
      <div>
        <img className="IMG3" src={"/images/easy.svg"} alt="Labor" />
        <div className="D14">
          <div className="D13">
            <h1 className="H12">Nachricht an die Erdlinge</h1>
            <p className="P12">{fragen[0]}</p>
          </div>
        </div>
        <button
          className="B11"
          onClick={() => {
            setFrage(false)
            setAntwort(true)
          }}
        >
          Weiter
        </button>
      </div>
    );
  }

  if (antwort) {
    return (
      <div className="D15">
        <p1 className="H12">{fragen_2[0]}</p1>
        <div className="D16">
          <button className="B12">{antworten[0][0]}</button>
          <button className="B12">{antworten[0][1]}</button>
          <button className="B12">{antworten[0][2]}</button>
          <button className="B12">{antworten[0][3]}</button>
        </div>
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
            <img className="IMG5" src={"/images/hilfe_background.svg"} alt="Fragezeichen" />
            <div className="D17">
            <div className="D18">
                <p className="P13">Hilfe</p>
            </div>
            <div className="D19">
                <p className="P14">Hier kommt die Hilfe</p>
            </div>
            </div>
            <button onClick={() => {
                setFrageFeld(false);
                setAntwort(true);
            }}>
            <img className="IMG6" src={"/images/back.svg"} alt="Fragezeichen"/>
            </button>
        </div>
    )
  }

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
