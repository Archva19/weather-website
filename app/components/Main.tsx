"use client";

import { useState } from "react";
import weatherData from "@/data/weather.json";
import Logo from "./Logo";
import CurrentWeather from "./CurrentWeather";

export default function Main() {
  const [activeCityId, setActiveCityId] = useState(1);
  const activeCity = weatherData.cities.find((el) => el.id === activeCityId);
  const backgroundImage = activeCity?.current.background;
  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center pt-4.75 flex flex-col gap-[102.61px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="mx-auto w-[88.8%] flex items-center justify-between">
          <Logo />
        </div>
        <div className="flex flex-col gap-7.5">
          <CurrentWeather activeCity={activeCity} />
        </div>
      </div>
    </>
  );
}
