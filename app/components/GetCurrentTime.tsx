"use client";

import React, { useEffect, useState } from "react";

export default function GetCurrentTime({ activeCity }: any) {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const formatted = new Date().toLocaleTimeString("en-GB", {
        timeZone: activeCity.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatted);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [activeCity?.timezone]);
  return (
    <>
      <p className="text-[10px]">{time} - Wednesday, 20 Aug '26</p>
    </>
  );
}
