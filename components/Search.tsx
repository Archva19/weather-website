"use client";
import { ChevronRight } from "lucide-react";
import weatherData from "@/data/weather.json";
import {motion} from "framer-motion"
import { City } from "@/types/types";

interface SearchProps{
  searchInput:string,
    setSearchInput: (value:string) => void;
}

export default function Search({ searchInput, setSearchInput }:SearchProps) {
  let filteredCities =
    searchInput.trim() === ""
      ? []
      : weatherData.cities.filter(
          (city:City) =>
            city.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            city.country.toLowerCase().includes(searchInput.toLowerCase()),
        );
  return (
    <>
      <div className="flex flex-col gap-5 w-31.25 relative md:w-76.25 xl:w-92.75 xl:pb-3.25 xl:mb-10.25">
        <motion.div 
        initial={{width:0, opacity:0}}
        animate={{width:"100%", opacity:1}}
        transition={{duration:0.5, ease:"easeInOut"}}
        className="w-full border-b border-white  flex items-center justify-between gap-0.5 pb-1 xl:pb-1.5 overflow-hidden">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            className="placeholder:text-[12px] placeholder:text-white/70 text-[12px] text-white w-28.5 h-3.5 outline-none md:placeholder:text-[18px] md:text-[18px] md:flex-1 md:h-5.25"
            id="search"
            placeholder="Search Location..."
            type="text"
            value = {searchInput}
          />
          <label htmlFor="search">
            <img
              className="cursor-pointer md:w-5.5"
              src="icons/search.svg"
              alt="search"
            />
          </label>
        </motion.div>

        {searchInput.trim() !== "" && (
          <div className="pt-2 h-auto absolute -bottom-20 w-full text-[10px] flex min-h-20 flex-col gap-1 items-start justify-start text-white md:text-[16px] xl:text-[20px]  xl:static">
            {filteredCities.map((city: City) => (
              <motion.a
              initial={{width: "auto"}}
              whileHover={{width: "100%"}}
              transition={{duration:0.3, ease: "easeInOut"}}
                className="cursor-pointer flex gap-2 items-center justify-between w-full"
                key={city.id}
                href={`/${city.name}`}
              >
                {city.name}/{city.country}
                <ChevronRight className = "w-4 md:w-6 xl:w-8"color="white" />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
