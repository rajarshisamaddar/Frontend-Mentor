import React from "react";
import "../scss/Summary.scss";
import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";

export default function Summary() {
  return (
    <div className="summary">
      <h2 className="summary-heading">Summary</h2>
      <div className="rectangle-1">
        <div className="left-rect">
          <img src={iconReaction} height={24} width={24}></img>
          <p>Reaction</p>
        </div>
        <div className="right-rect">
          <p>
            <b>80</b> / 100
          </p>
        </div>
      </div>
      <div className="rectangle-2">
        <div className="left-rect">
          <img src={iconMemory} height={24} width={24}></img>
          <p>Memory</p>
        </div>
        <div className="right-rect">
          <p>
            <b>92</b> / 100
          </p>
        </div>
      </div>
      <div className="rectangle-3">
        <div className="left-rect">
          <img src={iconVerbal} height={24} width={24}></img>
          <p>Verbal</p>
        </div>
        <div className="right-rect">
          <p>
            <b>61</b> / 100
          </p>
        </div>
      </div>
      <div className="rectangle-4">
        <div className="left-rect">
          <img src={iconVisual} height={24} width={24}></img>
          <p>Visual</p>
        </div>
        <div className="right-rect">
          <p>
            <b>72</b> / 100
          </p>
        </div>
      </div>
      <button className="btn-continue">Continue</button>
    </div>
  );
}
