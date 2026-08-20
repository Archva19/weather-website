"use client";

import { useState } from "react";
import DetailsCurrentWeatherList from "./DetailsCurrentWeatherList";

export default function FutureForecastItem({ item, isOpen, onToggle }: any) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <button
          onClick={onToggle}
          className="cursor-pointer w-full flex items-center justify-between text-[14px] md:text-[18px]"
        >
          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src={item.icon} alt={item.desctiption} />
            <div className="flex flex-col gap-1 items-start">
              <p>{item.date}</p>
              <p className="opacity-70">{item.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 md:gap-3">
            <p className = "md:text-[24px]">{item.temperature}°</p>
            <div className="w-1.5 h-1.5 border-b border-l rotate-135 border-white md:w-2 md:h-2"></div>
          </div>
        </button>
        {isOpen && <DetailsCurrentWeatherList item={item} listType="future" />}
      </div>
    </>
  );
}
