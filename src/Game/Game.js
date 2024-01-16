import { useEffect, useState } from "react";
import Game_Easy from "./Game_Easy";
import Prolog from "./Prolog";
import Game_Story from "./Game_Story";
import FragenEasyJson from "./FragenEasy.json";
import StoryTextJson from "./Story.json";
import FragenMediumJson from "./FragenMedium.json";
import Game_Medium from "./Game_Medium";

export default function Game({ prolog, setProlog }) {
  const storyList = [
    "Frage Medium",
    "Story",
    "Frage Easy",
    "Story",
    "Story",
    "Story",
    "Frage Easy",
    "Story",
    "Story",
    "Frage Easy",
    "Story",
  ];

  const [storyLength, setStoryLength] = useState(0)

  const [story, setStory] = useState(false);
  const [storyText, setStoryText] = useState("");
  const [storyIndex, setStoryIndex] = useState(0);
  const [storyIMG, setStoryIMG] = useState("");

  const [storyListIndex, setStoryListIndex] = useState(0);

  const [easy, setEasy] = useState(false);
  const [frageEasy, setFrageEasy] = useState("");
  const [aufgabeEasy, setAufgabeEasy] = useState("");
  const [antwortEasy, setAntwortEasy] = useState("");
  const [richtigeAntwort, setRichtigeAntwort] = useState("");
  const [easyIndex, setEasyIndex] = useState(0);
  const [easyIMG, setEasyIMG] = useState("");

  const [medium, setMedium] = useState(false);
  const [frageMedium, setFrageMedium] = useState("");
  const [aufgabeMedium, setAufgabeMedium] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [richtigeAntwortMedium, setRichtigeAntwortMedium] = useState("");
  const [mediumIndex, setMediumIndex] = useState(0);
  const [mediumIMG, setMediumIMG] = useState("");

  const [hilfe, setHilfe] = useState("")
  const [hilfeIMG, setHilfeIMG] = useState("")

  function Render() {
    console.log(storyList[storyListIndex]);
    if (storyList[storyListIndex] === "Story") {
      setEasy(false);
      setMedium(false);
      setStoryText(StoryTextJson[storyIndex].text);
      setStoryIMG(StoryTextJson[storyIndex].img);
      setStory(true);
    }
    if (storyList[storyListIndex] === "Frage Easy") {
      setStory(false);
      setMedium(false);
      setFrageEasy(FragenEasyJson[easyIndex].title);
      setAufgabeEasy(FragenEasyJson[easyIndex].fragen);
      setAntwortEasy(FragenEasyJson[easyIndex].antworten);
      setRichtigeAntwort(FragenEasyJson[easyIndex].correct);
      setEasyIMG(FragenEasyJson[easyIndex].img);
      setHilfe(FragenEasyJson[easyIndex].hilfe)
      setHilfeIMG(FragenEasyJson[easyIndex].hilfeIMG)
      setEasy(true);
    }
    if (storyList[storyListIndex] === "Frage Medium") {
      setStory(false);
      setEasy(false);
      setFrageMedium(FragenMediumJson[mediumIndex].title);
      setAufgabeMedium(FragenMediumJson[mediumIndex].Aufgabe);
      setTopText(FragenMediumJson[mediumIndex].top);
      setBottomText(FragenMediumJson[mediumIndex].bottom);
      setRichtigeAntwortMedium(FragenMediumJson[mediumIndex].correct);
      setMediumIMG(FragenMediumJson[mediumIndex].img);
      setHilfe(FragenMediumJson[mediumIndex].hilfe)
      setHilfeIMG(FragenMediumJson[mediumIndex].hilfeIMG)
      setMedium(true);
    }
  }

  function weiter() {
    console.log("StoryListIndex: " + storyListIndex);
    console.log("StoryIndex: " + storyIndex);

    if (prolog) {
      setProlog(false);
    } else if (storyListIndex === storyLength - 1) {
      alert("Spiel ist zu ende")
    } else {
      if (storyList[storyListIndex] === "Story") {
        setStoryIndex(storyIndex + 1);
        setStoryListIndex(storyListIndex + 1);
      }
      if (storyList[storyListIndex] === "Frage Easy") {
        setEasyIndex(easyIndex + 1);
        setStoryListIndex(storyListIndex + 1);
      }
      if (storyList[storyListIndex] === "Frage Medium") {
        setMediumIndex(mediumIndex + 1);
        setStoryListIndex(storyListIndex + 1);
      }
    }
  }

  useEffect(() => {
    Render();
  }, [storyListIndex]);

  useEffect(() => {
    setStoryLength(storyList.length)
    console.log(storyList.length)
  }, [])

  function back() {
    if (storyList[storyListIndex - 1] === "Story") {
      setStoryIndex(storyIndex - 1);
      setStoryListIndex(storyListIndex - 1);
    }
    if (storyList[storyListIndex - 1] === "Frage Easy") {
      setEasyIndex(easyIndex - 1);
      setStoryListIndex(storyListIndex - 1);
    }
    if (storyList[storyListIndex - 1] === "Frage Medium") {
      setMediumIndex(mediumIndex - 1);
      setStoryListIndex(storyListIndex - 1);
    }
  }

  if (prolog) {
    return <Prolog setProlog={setProlog} weiter={weiter} />;
  }
  if (story) {
    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <Game_Story
        storyText={storyText}
        storyIMG={storyIMG}
        storyIndex={storyIndex}
        weiter={weiter}
        back={back}
      />
    );
  }
  if (easy) {
    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <Game_Easy
        frageEasy={frageEasy}
        aufgabeEasy={aufgabeEasy}
        antwortEasy={antwortEasy}
        richtigeAntwort={richtigeAntwort}
        easyIMG={easyIMG}
        easyIndex={easyIndex}
        easy={easy}
        weiter={weiter}
        back={back}
        hilfe={hilfe}
        hilfeIMG={hilfeIMG}
      />
    );
  }

  if (medium) {
    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <Game_Medium
        frageMedium={frageMedium}
        aufgabeMedium={aufgabeMedium}
        topText={topText}
        bottomText={bottomText}
        richtigeAntwortMedium={richtigeAntwortMedium}
        mediumIMG={mediumIMG}
        medium={medium}
        weiter={weiter}
        back={back}
        hilfe={hilfe}
        hilfeIMG={hilfeIMG}
      />
    );
  }

  return <div></div>;
}
