import React, { useState, useEffect } from "react";

export default function DisplayTime() {
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
  return <h2 style={{ margin: "10px 10px" }}>{time}</h2>;
}
