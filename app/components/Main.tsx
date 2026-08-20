"use client";

import { useState } from "react";
import weatherData from "@/data/weather.json";

export default function Main() {
  const [activeCityId, setActiveCityId] = useState(1);
  const activeCity = weatherData.cities.find((el) => el.id === activeCityId);
  const backgroundImage = activeCity?.current.background;
  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </>
  );
}
