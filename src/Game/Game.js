import { useEffect, useState } from "react";
import Game_Easy from "./Game_Easy";
import Prolog from "./Prolog";
import Game_Story from "./Game_Story";
import FragenEasyJson from "./FragenEasy.json";
import StoryTextJson from "./Story.json";

export default function Game({ prolog, setProlog }) {
  const storyList = ["Story", "Story", "Story", "Frage Easy", "Story", "Frage Easy"];

  const [story, setStory] = useState(false);
  const [storyText, setStoryText] = useState();
  const [storyIndex, setStoryIndex] = useState(0);
  const [storyIMG, setStoryIMG] = useState();

  const [storyListIndex, setStoryListIndex] = useState(0);


  const [easy, setEasy] = useState(false);
  const [frageEasy, setFrageEasy] = useState();
  const [aufgabeEasy, setAufgabeEasy] = useState();
  const [antwortEasy, setAntwortEasy] = useState();
  const [richtigeAntwort, setRichtigeAntwort] = useState();
  const [easyIndex, setEasyIndex] = useState(0);
  const [easyIMG, setEasyIMG] = useState();

  const [frageMedium, setFrageMedium] = useState();
  const [aufgabeMedium, setAufgabeMedium] = useState();
  const [topText, setTopText] = useState();
  const [bottomText, setBottomText] = useState();
  const [richtigeAntwortMedium, setRichtigeAntwortMedium] = useState();
  const [mediumIndex, setMediumIndex] = useState(0);
  const [mediumIMG, setMediumIMG] = useState();

  function Render() {
    console.log(storyList[storyListIndex])
    if (storyList[storyListIndex] === "Story") {
      setEasy(false);
      setStoryText(StoryTextJson[storyIndex].text);
      setStoryIMG(StoryTextJson[storyIndex].img);
      setStory(true);
    }
    if (storyList[storyListIndex] === "Frage Easy") {
      setStory(false);
      setFrageEasy(FragenEasyJson[easyIndex].title);
      setAufgabeEasy(FragenEasyJson[easyIndex].fragen);
      setAntwortEasy(FragenEasyJson[easyIndex].antworten);
      setRichtigeAntwort(FragenEasyJson[easyIndex].correct);
      setEasyIMG(FragenEasyJson[easyIndex].img);
      setEasy(true);
    }
    if (storyList[storyListIndex] === "Frage Medium") {
    }
  }

  function weiter() {
    console.log("StoryListIndex: " + storyListIndex);
    console.log("StoryIndex: " + storyIndex);
    
    if (prolog) {
      setProlog(false);
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
  }, [storyListIndex])

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
      />
    );
  }
  return <div></div>;
}
