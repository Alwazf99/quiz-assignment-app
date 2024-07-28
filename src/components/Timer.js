import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const Timer = ({ timeLimit, onTimeUp, resetTrigger }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    setTimeLeft(timeLimit);
  }, [resetTrigger, timeLimit]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Typography variant="h6" align="center">
      Time Left: {formatTime(timeLeft)}
    </Typography>
  );
};

export default Timer;
