import "./Game_Easy.css";

export default function Prolog({setProlog, weiter}) {
    return (
            <div className="D11">
              <div className="CoverDiv"></div>
              <img className="IMG2" src={"/images/Prolog.png"} alt="prolog" />
              <div className="D12">
                <h1 className="H11"><br /></h1>
                <p className="P11"></p>
              </div>
              <button
                className="B11"
                onClick={() => {
                  weiter()
                }}
              >
                Weiter
              </button>
            </div>
          );
}