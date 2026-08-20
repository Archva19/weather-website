"use client";

import Image from "next/image";
import DetailsCurrentWeather from "./DetailsCurrentWeather";
import FutureForecast from "./FutureForecast";
import { useEffect, useState } from "react";
import Search from "./Search";
import weatherData from "@/data/weather.json";

export default function WeatherDetails({
  activeCity,
  searchInput,
  setSearchInput,
}: any) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 1280);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <section className="w-full pt-13.75 pb-10.25 bg-white/4 border-t-5 border-t-white/14 backdrop-blur-[19px] text-white max-h-125.5 overflow-y-scroll overflow-x-visible md:pt-26.75 md:max-h-149.25 xl:h-full xl:max-h-none xl:pt-9.25 xl:pl-8.75 ">
        <div className="z-100 w-[76%] relative mx-auto max-w-88.5 xl:mx-0 xl:max-w-none xl:w-88.5">
          {isDesktop && (
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
          )}
          <div
            className={`${searchInput.trim() !== "" && isDesktop ? "hidden" : ""}`}
          >
            <DetailsCurrentWeather activeCity={activeCity} />
            <FutureForecast forecast={activeCity.forecast} />
          </div>
        </div>
      </section>
    </>
  );
}
