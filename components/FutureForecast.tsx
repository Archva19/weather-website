"use client";
import { useState } from "react";
import FutureForecastItem from "./FutureForecastItem";
import { ForecastItem } from "@/types/types";

export default function FutureForecast({
  forecast,
}: {
  forecast: ForecastItem[];
}) {
  const [openDate, setOpenDate] = useState<string | boolean>(false);

  function handleOnToggle(date: string) {
    setOpenDate((prev) => (date === openDate ? false : date));
  }
  return (
    <>
      <div className="w-full items-center flex flex-col gap-9.25 md:gap-14 xl:items-start">
        <p className="text-[14px] md:text-[18px]">
          Future's Weather Forecast...
        </p>
        <div className="w-full flex flex-col gap-7.5">
          {forecast.map((item) => (
            <FutureForecastItem
              key={item.date}
              item={item}
              isOpen={item.date === openDate}
              onToggle={() => handleOnToggle(item.date)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
