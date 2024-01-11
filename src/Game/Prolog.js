import "./Game_Easy.css";

export default function Prolog({setProlog, weiter}) {
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
                  weiter()
                }}
              >
                Weiter
              </button>
            </div>
          );
}