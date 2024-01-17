import "./Game_Easy.css";
import ImageComponent from "./ImageComponenet";

export default function Game_Story({
  storyText,
  storyIMG,
  storyIndex,
  weiter,
  back,
}) {

  return (
    <div>
      <ImageComponent src={storyIMG} />
      <div className="D14">
        <div
          className="D13"
          style={{ display: storyText.length > 0 ? "flex" : "none" }}
        >
          <p
            className="P12"
            style={{
              fontSize: "1.3vw",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            {storyText}{" "}
          </p>
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
