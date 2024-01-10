import { useState } from "react";
import "./Game_Easy.css";

export default function Game_Easy() {
  const [prolog, setProlog] = useState(true);
  const [frage, setFrage] = useState(false);
  const [antwort, setAntwort] = useState(false);
  const [frageFeld, setFrageFeld] = useState(false);
  const [fragenIndex, setFragenIndex] = useState(0);
  const [story, setStory] = useState(false);

  const fragenSets = [
    {
      title: "Nachricht an die Erdlinge",
      fragen: ["Wir zerstören die Erde in 001001101 Tagen. Wenn ihr nicht in 110011 Tagen 0011011 Tonnen Gold zum Planeten Slawp sendet. LG"],
      antworten: [[41, 51, 105, 15]],
      correct: [1],
    },
    {
      title: "Was heißt dieser Binärcode übersetzt?",
      fragen: ["01001001 01101110 00100000 01100100 01100101 01110010 00100000 01101000 01110101 01100101 01101100 01101001 01100111 01100101 01101110"],
      antworten: [["in der huegeligen", "in der Landschaft", "in der Nebelwald"]],
      correct: [1],
    },
    {
      title: "Welches Wort ergibt sich aus den Anfangsbuchstzaben der rot geschriebenen Wörtern",
      fragen: ["In(0,0,0) der(0,0,255) hügeligen(255,0,0), idyllischen(255,0,0) Ferne(0,0,255) weit(0,0,0) weg(0,255,0) von(0,0,255) der(0,255,255) Erde(255,0,0) lebten(0,0,0) friedliche(0,255,0) Individuen(0,255,0), die(0,255,255) sich(0,0,255) liebevoll(0,255,0) um(0,255,255) ihre(0,255,0) Familie(0,0,255) und(0,255,0) ihre(0,255,0) Umwelt(0,0,255) kümmern(0,255,255), während(0,255,0) ein(0,0,255) friedlicher(255,0,0) König(0,255,255) das(0,255,0) Land(255,0,0) regiert(0,0,0) und(0,0,0) immer(0,0,0) einfallsreiche(0,0,0) Ideen(255,0,0) hat(255,0,0)."],
      antworten: [["iwlruie", "dfvsfue", "wfiliuiwd", "eflih"]],
      correct: [4],
    },
    {
      title: " Du möchtest dass die Drohne um 90 Grad nach rechts fliegt. Was ist der passende Binärcode dafür?",
      fragen: [" Du möchtest dass die Drohne um 90 Grad nach rechts fliegt. Was ist der passende Binärcode dafür?"],
      antworten: [["0001110", "1100110", "1011010", "1001101"]],
      correct: [3],
    },
  ];

  const hilfeSets = [
    {
      help: "help1"
    },
    {
      help: (
        <div className="container">
          <div className="leftPane">
            <img src="/images/help2.png" alt="Buchstaben Dez" style={{ maxHeight: '550px' }} />
          </div>
          <div className="rightPane">
            <p>01001001 01101110 00100000 01100100 01100101 01110010 00100000 01101000 01110101 01100101 01101100 01101001 01100111 01100101 01101110</p>
          </div>
        </div>
      )
    },
    {
      help: (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <img src="/images/help3.png" alt="Buchstaben Dez" style={{ maxHeight: '600px' }} />
        </div>
      )
    },
    {
      help: (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <img src="/images/help4.gif" alt="Buchstaben Dez" style={{ maxHeight: '600px' }} />
        </div>
      )
    }
  ];

  const storySets = [
    {
      title: "Nachricht an die Erdlinge",
      story: "agesdgrf",
      //story2: "hwdtzrtsw",
      //story3: "ycgbhsadh"
    },
    {
      title: "Nachricht an die Erdlinge2",
      story: "agesdgrf2",
      //story2: "hwdtzrtsw",
    },
    {
      title: "Nachricht an die Erdlinge3",
      story: "agesdgrf3"
    },
    {
      title: "Nachricht an die Erdlinge4",
      story: "agesdgrf4"
    },
  ];

  const currentSet2 = storySets[fragenIndex];
  const sTitle = currentSet2.title;
  const sStory = currentSet2.story;

  const currentSet = fragenSets[fragenIndex];
  const title = currentSet.title;
  const fragen = currentSet.fragen;
  const antworten = currentSet.antworten;
  const correct = currentSet.correct;

  function checkAnswer(x) {
    if (x === correct[0]) {
      alert("Richtig!");
      handleNextQuestion();
    } else {
      alert("Antwort falsch");
    }
  }

  function handleNextQuestion() {
    if (fragenIndex < fragenSets.length - 1) {
      setFragenIndex(fragenIndex + 1);
      setAntwort(false);
      setFrage(true);
      const nextSet = storySets[fragenIndex + 1];
      if (nextSet.story2 || nextSet.story3) {
        setStory(true);
      } else {
        setFrage(true);
      }
    } else {
      alert("Keine weiteren Fragen verfügbar");
    }
  }

  function handleBevoreQuestion() {
    setFragenIndex(fragenIndex - 1);
  }

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
            setFrage(false);
            setStory(true);
          }}
        >
          Weiter
        </button>
      </div>
    );
  }

  if (story) {
    const currentStorySet = storySets[fragenIndex];
    const sTitle = currentStorySet.title;
    const sStory = currentStorySet.story;
    const sStory2 = currentStorySet.story2;
    const sStory3 = currentStorySet.story3;

    return (
      <div>
        <img className="IMG3" src={"/images/easy.svg"} alt="Labor" />
        <div className="D14">
          <div className="D13">
            <h1 className="H12" style={{ fontSize: `calc(70px - ${sTitle.length * 0.33}px)` }}>{sTitle}</h1>
            <p className="P12" style={{ fontSize: `calc(50px - ${sStory.length * 0.22}px)` }}>{sStory}</p>
          </div>
        </div>
        <button
          className="B11"
          onClick={() => {
            if (sStory2) {
              setStory(true);
            } else if (sStory3) {
              setStory(true);
            } else {
              setFrage(true);
              setAntwort(false);
              setStory(false);
            }
          }}
        >
          Weiter
        </button>
        <button
          className="C11"
          onClick={() => {
            handleBevoreQuestion();
            setProlog(true);
            setFrage(false);
            setStory(false);
          }}
        >
          Zurück
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
            <h1 className="H12" style={{ fontSize: `calc(70px - ${title.length * 0.33}px)` }}>{title}</h1>
            <p className="P12" style={{ fontSize: `calc(50px - ${fragen[0].length * 0.22}px)` }}>{fragen[0]}</p>
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
        <button
          className="C11"
          onClick={() => {
            handleBevoreQuestion();
            setProlog(false);
            setFrage(false);
            setStory(true);
          }}
        >
          Zurück
        </button>
      </div>
    );
  }

  if (antwort) {
    return (
      <div className="D15">
        <p1 className="H12">{currentSet.fragen[1]}</p1>
        <div className="D16" style={{ height: '750px' }}>
          {antworten[0].map((answer, index) => (
            <button key={index} className="B13" onClick={() => { checkAnswer(index + 1, setStory(true)) }}>{answer} </button>
          ))}
        </div>
        <button
          onClick={() => {
            setAntwort(false);
            setFrageFeld(true);
          }}
        >
          <img className="IMG4" src={"/images/frage.svg"} alt="Fragezeichen" />
        </button>
        <button
          className="C12"
          onClick={() => {
            handleBevoreQuestion();
            setProlog(false);
            setFrage(false);
          }}
        >
          Zurück
        </button>
      </div>
    );
  }

  if (frageFeld) {
    const helpText = hilfeSets[fragenIndex]?.help;

    return (
      <div className="D171">
        <img className="IMG5" src={"/images/hilfe_background.svg"} alt="Fragezeichen" />
        <div className="D17">
          <div className="D18">
            <p className="P13">Hilfe</p>
          </div>
          <div className="D19">
            <p className="P14">{helpText}</p>
          </div>
        </div>
        <button onClick={() => {
          setFrageFeld(false);
          setAntwort(true);
        }}>
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






