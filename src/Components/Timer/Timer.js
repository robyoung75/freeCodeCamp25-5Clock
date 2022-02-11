import React, { useEffect } from "react";
import "./Timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { formatTime } from "../../Assets/helperFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";

const Timer = ({
  displayTime,
  setDisplayTime,
  breakTime,
  sessionTime,
  handleStartStop,
  handleReset,
  onBreak,
  setOnBreak,
  audioElement,
  isPlaying,
  key,
  setKey,
}) => {
  const renderTime = () => {
    return (
      <div className="renderTime">
        <h2 id="timer-label" className="text-center">
          {onBreak ? "Break" : "Session"}
        </h2>
        <h1
          className="text-center"
          style={
            displayTime <= 60 ? { color: "#dc3545" } : { color: "#212529" }
          }
        >
          {formatTime(displayTime)}
        </h1>
      </div>
    );
  };

  let durationTime = onBreak === true ? breakTime : sessionTime;

  useEffect(() => {
    setDisplayTime(sessionTime);
  }, [sessionTime, setDisplayTime]);

  useEffect(() => {
    if (displayTime === 0) {
      audioElement.current.currentTime = 0;
      audioElement.current.play();
      if (!onBreak) {
        setOnBreak(true);
        setDisplayTime(breakTime);
      } else if (onBreak) {
        setOnBreak(false);
        setDisplayTime(sessionTime);
      }
    }
  }, [
    displayTime,
    onBreak,
    breakTime,
    sessionTime,
    audioElement,
    setOnBreak,
    setDisplayTime,
  ]);

  return (
    <div className="timer">
      <CountdownCircleTimer
        // size={100}
        key={onBreak}
        isPlaying={isPlaying}
        duration={durationTime}
        colors={["#0d6efd", "#0d6efd", "#dc3545", "#dc3545"]}
        colorsTime={[durationTime, 45, 30, 0]}
      >
        {renderTime}
      </CountdownCircleTimer>
      <div className="timer__controls">
        <button
          id="start-stop"
          className="btn btn-primary m-2 btn-sm"
          onClick={handleStartStop}
        >
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button
          id="reset"
          className="btn btn-primary m-2 btn-sm"
          onClick={handleReset}
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>

      <audio
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        id="beep"
        ref={audioElement}
      ></audio>
    </div>
  );
};

export default Timer;
