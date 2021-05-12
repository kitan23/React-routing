import React, { useState, useEffect } from "react";

export default function About() {
  const [showClock, setClock] = useState(true);

  return (
    <div className="time">
      <h1> About </h1>
      <button
        className="clock"
        onClick={() => setClock(!showClock)}
        style={{ "background-color": showClock ? "red" : "green" }}
      >
        {showClock ? "Turn off" : "Turn on"}
      </button>
      {showClock && <DisplayTime />}
    </div>
  );
}

function DisplayTime() {
  const clock = new Date();
  const [time, setTime] = useState(clock.toLocaleTimeString());

  useEffect(() => {
    const timeId = setInterval(() => {
      const data = new Date();
      const date = data.toLocaleTimeString();
      setTime(date);
    }, 1000);
    return () => {
      console.log("cleanup");
      clearInterval(timeId);
    };
  }, []);
  return <h2 style={{ margin: "20px 10px" }}>{time}</h2>;
}
