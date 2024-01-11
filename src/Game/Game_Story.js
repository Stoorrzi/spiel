import "./Game_Easy.css";

export default function Game_Story({
  storyText,
  storyIMG,
  storyIndex,
  weiter,
  back,
}) {
  return (
    <div>
      <img className="IMG3" src={storyIMG} alt="Labor" />
      <div className="D14">
        <div className="D13">
          <p className="P12">{storyText}</p>
        </div>
      </div>
      <button
        className="B11"
        onClick={() => {
          weiter();
        }}
      >
        Weiter
      </button>
      {storyIndex === 0 ? (
        <></>
      ) : (
        <button
          className="B111"
          onClick={() => {
            back();
          }}
        >
          Zurück
        </button>
      )}
    </div>
  );
}
