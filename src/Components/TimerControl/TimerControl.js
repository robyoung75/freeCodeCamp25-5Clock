import React from "react";
import { secsToMins } from "../../Assets/helperFunctions";
import "./TimerControl.css";

const TimerControl = ({
  title,
  controlLabel_id,
  breakTime,
  sessionTime,
  handleBreakDecrement,
  handleSessionDecrement,
  handleBreakIncrement,
  handleSessionIncrement,
}) => {
  return (
    <div className="timerControl">
      <h2 id={controlLabel_id} className="text-center">
        {title}
      </h2>
      <div className="timerControl__container">
        <button
          type="button"
          className="btn btn-primary btn-sm myBtn"
          id={
            controlLabel_id === "break-label"
              ? "break-decrement"
              : "session-decrement"
          }
          onClick={
            controlLabel_id === "break-label"
              ? handleBreakDecrement
              : handleSessionDecrement
          }
        >
          -
        </button>

        <span
          className="controls__count"
          id={
            controlLabel_id === "break-label"
              ? "break-length"
              : "session-length"
          }
        >
          {controlLabel_id === "break-label"
            ? secsToMins(breakTime)
            : secsToMins(sessionTime)}
        </span>

        <button
          type="button"
          className="btn btn-primary btn-sm myBtn"
          id={
            controlLabel_id === "break-label"
              ? "break-increment"
              : "session-increment"
          }
          onClick={
            controlLabel_id === "break-label"
              ? handleBreakIncrement
              : handleSessionIncrement
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TimerControl;
