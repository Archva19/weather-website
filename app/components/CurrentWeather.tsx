"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CurrentWeather({ activeCity }: any) {
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
      <div className="flex items-center gap-2.5 mx-auto w-[88.8%] text-white">
        <p className="text-[64px] tracking-[-8%] leading-[100%] mb-1.5 w-21.5">
          {activeCity.current.temperature}°
        </p>
        <div className="flex items-end gap-2">
          <div className="flex flex-col gap-0.5">
            <p className="text-[30px] leading-[100%]">{activeCity.name}</p>
            <p className="text-[10px] leading-[100%]">
              {time} - Wednesday, 20 Aug '26
            </p>
          </div>
          <div>
            <Image
              src={activeCity.current.icon}
              alt={activeCity.current.condition}
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    </>
  );
}

//  "current": {
//         "temperature": 16,
//         "feelsLike": 15,
//         "condition": "cloudy",
//         "description": "PARTLY CLOUDY",
//         "humidity": 58,
//         "cloudiness": 86,
//         "wind": 5,
//         "windDirection": "NW",
//         "icon": "icons/cloudyIcon.svg",
//         "background": "images/cloudy.jpg"
//       },
