import DetailsCurrentWeatherList from "./DetailsCurrentWeatherList";

export default function DetailsCurrentWeather({ activeCity }: any) {
  return (
    <>
      <div className="w-full flex flex-col items-center text-[14px] md:text-[18px] xl:items-start">
        <p className="mb-9.25 h-4 md:mb-13 md:h-5.25">Weather Details...</p>
        <div className="flex flex-col gap-7.5 items-center  mb-9.25 w-full md:mb-9 xl:items-start">
          <p className="font-medium h-4 md:h-5.25">
            {activeCity.current.description}
          </p>
          <DetailsCurrentWeatherList item={activeCity.details} listType = "current"/>
        </div>
        <div className="border-b border-b-white h-12.5 mb-9.25 w-full md:mb-10.25 xl:w-92.75"></div>
      </div>
    </>
  );
}
