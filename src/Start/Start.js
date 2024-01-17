import React from "react";
import "./Start.css"
import Start_Choose from "./Start_Choose";

export default function Start({setProlog}) {
  return (
    <div className="D1">
      <Start_Choose setProlog={setProlog}/>
    </div>
  );
}
