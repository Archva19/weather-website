import Image from "next/image";
import DetailsCurrentWeather from "./DetailsCurrentWeather";
import FutureForecast from "./FutureForecast";

export default function WeatherDetails({ activeCity }: any) {
  return (
    <>
      <section className="absolute w-full bottom-0 pt-13.75 pb-10.25 bg-white/4 border-t-5 border-t-white/14 backdrop-blur-[19px] text-white max-h-125.5 overflow-y-scroll">
        <div className="w-[76%] mx-auto">
          <DetailsCurrentWeather activeCity={activeCity} />
          <FutureForecast forecast = {activeCity.forecast}/>
        </div>
      </section>
    </>
  );
}