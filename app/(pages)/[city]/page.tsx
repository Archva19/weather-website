"use client";

import { useParams } from "next/navigation";
import weatherData from "@/data/weather.json";
import Logo from "@/app/components/Logo";
import CurrentWeather from "@/app/components/CurrentWeather";
import WeatherDetails from "@/app/components/WeatherDetails";
import Search from "@/app/components/Search";
import { useEffect, useState } from "react";

export default function page() {
  const { city } = useParams();
  const activeCity = weatherData.cities.find((el) => el.name === city);
  const backgroundImage = activeCity?.current.background;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 1280);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [searchInput, setSearchInput] = useState("");
  


  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center pt-4.75 flex flex-col gap-[102.61px] md:gap-[210.63px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="mx-auto w-[88.8%] flex items-center justify-between md:w-[89.9%] xl:flex-col xl:items-start xl:h-full xl:mx-0 xl:pl-29 xl:pr-30 xl:pt-9.25 xl:pb-21.25 xl:absolute xl:top-0 xl:w-screen">
            <Logo />
             {!isDesktop &&  <Search searchInput = {searchInput} setSearchInput={setSearchInput} />}
          {isDesktop && <CurrentWeather activeCity={activeCity} />}
        </div>
        <div className="absolute bottom-0 w-full flex flex-col gap-7.5 md:gap-11 xl:w-131.5 xl:h-full xl:right-0 xl:top-0">
          {!isDesktop && <CurrentWeather activeCity={activeCity} />}
          <WeatherDetails searchInput = {searchInput} setSearchInput={setSearchInput} activeCity={activeCity} />
        </div>
      </div>
    </>
  );
}
