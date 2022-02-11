import React, { useState, useRef } from "react";
import TimerControl from "../TimerControl/TimerControl";
import Timer from "../Timer/Timer";
import "./FccClock.css";

const FccClock = () => {
  const audioElement = useRef(null);
  const [breakTime, setBreakTime] = useState(300);
  const [sessionTime, setSessionTime] = useState(1500);
  const [displayTime, setDisplayTime] = useState(1500);
  const [intervalId, setIntervalId] = useState(null);
  const [onBreak, setOnBreak] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);

  const handleStartStop = (e) => {
    e.preventDefault();
    console.log("handleStartStop");
    if (intervalId === null) {
      setIsPlaying(true);
      const timeInterval = setInterval(() => {
        setDisplayTime((prev) => prev - 1);
      }, 1000);
      setIntervalId(timeInterval);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsPlaying(false);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log("handleReset");
    setBreakTime(300);
    setSessionTime(1500);
    setDisplayTime(1500);
    clearInterval(intervalId);
    setOnBreak(false);
    setIntervalId(null);
    setIsPlaying(false);
  };

  const handleBreakDecrement = (e) => {
    e.preventDefault();
    if (intervalId === null) {
      breakTime <= 60 ? setBreakTime(60) : setBreakTime((prev) => prev - 60);
    }
  };

  const handleSessionDecrement = (e) => {
    e.preventDefault();
    if (intervalId === null) {
      sessionTime <= 60
        ? setSessionTime(60)
        : setSessionTime((prev) => prev - 60);
    }
  };

  const handleBreakIncrement = (e) => {
    e.preventDefault();
    if (intervalId === null) {
      breakTime >= 3600
        ? setBreakTime(3600)
        : setBreakTime((prev) => prev + 60);
    }
  };

  const handleSessionIncrement = (e) => {
    e.preventDefault();
    if (intervalId === null) {
      sessionTime >= 3600
        ? setSessionTime(3600)
        : setSessionTime((prev) => prev + 60);
    }
  };

  return (
    <div className="fcc_clock">
      <div className="fcc_clock__timerControls">
        <TimerControl
          title="Break Length"
          controlLabel_id="break-label"
          breakTime={breakTime}
          handleBreakDecrement={handleBreakDecrement}
          handleBreakIncrement={handleBreakIncrement}
        />

        <TimerControl
          title="Session Length"
          controlLabel_id="session-label"
          sessionTime={sessionTime}
          handleSessionDecrement={handleSessionDecrement}
          handleSessionIncrement={handleSessionIncrement}
        />
      </div>

      <div className="fcc_clock__timer">
        <Timer
          displayTime={displayTime}
          setDisplayTime={setDisplayTime}
          breakTime={breakTime}
          sessionTime={sessionTime}
          handleStartStop={handleStartStop}
          handleReset={handleReset}
          onBreak={onBreak}
          setOnBreak={setOnBreak}
          audioElement={audioElement}
          isPlaying={isPlaying}
          key={key}
          setKey={setKey}
        />
      </div>
    </div>
  );
};

export default FccClock;
