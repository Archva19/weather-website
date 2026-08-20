"use client";

import { useParams } from "next/navigation";
import weatherData from "@/data/weather.json";
import Logo from "@/app/components/Logo";
import CurrentWeather from "@/app/components/CurrentWeather";
import WeatherDetails from "@/app/components/WeatherDetails";

export default function page() {
  const { city } = useParams();
  const activeCity = weatherData.cities.find((el) => el.name === city);
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
        <CurrentWeather activeCity={activeCity} />
        <WeatherDetails activeCity={activeCity} />
      </div>
    </>
  );
}
