"use client";

import { useParams } from "next/navigation";
import weatherData from "@/data/weather.json";
import Logo from "@/components/Logo";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherDetails from "@/components/WeatherDetails";
import Search from "@/components/Search";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Page() {
  const { city } = useParams();
  const activeCity = weatherData.cities.find((el) => el.name === city) || weatherData.cities[0];
  const backgroundImage = activeCity?.current.background;

  const [isDesktop, setIsDesktop] = useState<null | boolean>(null);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 1280);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [searchInput, setSearchInput] = useState("");

  if (isDesktop === null) return null;

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center pt-4.75 flex flex-col gap-[102.61px] md:gap-[210.63px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="mx-auto w-[88.8%] flex items-center justify-between md:w-[89.9%] xl:flex-col xl:items-start xl:h-full xl:mx-0 xl:pl-29 xl:pr-30 xl:pt-9.25 xl:pb-21.25 xl:absolute xl:top-0 xl:w-screen">
          <Logo />
          {!isDesktop && (
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
          )}
          {isDesktop && <CurrentWeather activeCity={activeCity} />}
        </div>
        <motion.div
          initial={{ width: isDesktop ? 0 : "100%", height: isDesktop ? "100%" : 0 }}
          animate={{ width: isDesktop ? "526px" : "100%", height: isDesktop ? "100%" : "auto" }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 w-full flex flex-col gap-7.5 md:gap-11 xl:w-131.5 xl:h-full xl:right-0 xl:top-0"
        >
          {!isDesktop && <CurrentWeather activeCity={activeCity} />}
          <WeatherDetails
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            activeCity={activeCity}
          />
        </motion.div>
      </div>
    </>
  );
}
