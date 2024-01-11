import "./Game_Easy.css";

export default function Prolog({setProlog, weiter}) {
    return (
            <div className="D11">
              <div className="CoverDiv"></div>
              <img className="IMG2" src={"/images/prolog.svg"} alt="prolog" />
              <div className="D12">
                <h1 className="H11"><br /></h1>
                <p className="P11">
                Hallo Agent,
                wir haben Neugikeiten für dich. Wir haben soeben eine Nachricht von einem Planeten 
                am Rande der Galaxy bekommen, allerdings ist sie verschlüsselt.
                <br />
                Wir brauchen deine Hilfe um die Nachricht zu entziffern!
                <br />
                <br />
                <br />
                <br />
                Interstellare Agentur für Freiheit und Sicherheit
                </p>
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