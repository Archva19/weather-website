import DetailsCurrentWeatherList from "./DetailsCurrentWeatherList";

export default function DetailsCurrentWeather({ activeCity }: any) {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <p className="text-[14px] mb-9.25">Weather Details...</p>
        <div className="flex flex-col gap-7.5 items-center  mb-9.25 w-full">
          <p className="text-[15px] font-medium">
            {activeCity.current.description}
          </p>
          <DetailsCurrentWeatherList item={activeCity.details} listType = "current"/>
        </div>
        <div className="border-b border-b-white h-12.5 mb-9.25 w-full"></div>
      </div>
    </>
  );
}
