import React from "react";
import "../scss/Results.scss";

export default function Results() {
  return (
    <div className="results">
      <h2 className="heading">Your Result</h2>
      <div className="circle">
        <p className="h72">76</p>
        <p className="hp">of 100</p>
      </div>
      <h2 className="great">Great</h2>
      <p className="para">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
