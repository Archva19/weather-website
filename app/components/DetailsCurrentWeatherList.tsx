"use client";

import { useEffect, useState } from "react";

export default function DetailsCurrentWeatherList({ item, listType }: any) {
  let weatherDetails = [];
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  listType === "current"
    ? (weatherDetails = [
        {
          id: 1,
          title: "Temp max",
          value: item.tempMax + "°",
          icon: isDesktop ? "icons/tempMaxDesktop.svg" : "icons/tempMax.svg",
        },
        {
          id: 2,
          title: "Temp min",
          value: item.tempMin + "°",
          icon: isDesktop ? "icons/tempMinDesktop.svg" : "icons/tempMin.svg",
        },
        {
          id: 3,
          title: "Humidity",
          value: item.humidity + "%",
          icon: isDesktop ? "icons/humidityDesktop.svg" : "icons/humidity.svg",
        },
        {
          id: 4,
          title: "Cloudy",
          value: item.cloudiness + "%",
          icon: isDesktop
            ? "icons/cloudinessDesktop.svg"
            : "icons/cloudiness.svg",
        },
        {
          id: 5,
          title: "Wind",
          value: item.wind + "km/h",
          icon: isDesktop ? "icons/windIconDesktop.svg" : "icons/windIcon.svg",
        },
      ])
    : (weatherDetails = [
        {
          id: 1,
          title: "Temp max",
          value: item.tempMax + "°",
          icon: isDesktop ? "icons/tempMaxDesktop.svg" : "icons/tempMax.svg",
        },
        {
          id: 2,
          title: "Temp min",
          value: item.tempMin + "°",
          icon: isDesktop ? "icons/tempMinDesktop.svg" : "icons/tempMin.svg",
        },
      ]);
  return (
    <>
      <div className="w-full flex flex-col gap-7.5 text-[14px] md:text-[18px]">
        {weatherDetails.map((item) => (
          <div
            key={item.id}
            className="w-full flex items-center justify-between h-auto"
          >
            <p className=" opacity-70">{item.title}</p>
            <div className="flex items-center gap-[20.95px] md:gap-6.5">
              <p>{item.value}</p>
              <img
                src={item.icon}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
