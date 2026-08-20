import Image from "next/image";
import GetCurrentTime from "./GetCurrentTime";

export default function CurrentWeather({ activeCity }: any) {
  return (
    <>
      <section className="flex items-center gap-4 mx-auto w-[88.8%] text-white md:w-[89.8%] md:gap-7 xl:mx-0 xl:w-auto">
        <p className="text-[64px] tracking-[-8%] mb-1.5 md:text-[120px] xl:text-[143px]">
          {activeCity.current.temperature}°
        </p>
        <div className="flex items-end gap-2">
          <div className="flex flex-col gap-0.5">
            <p className="text-[30px] md:text-[48px] xl:text-[60px]">{activeCity.name}</p>
            <GetCurrentTime activeCity={activeCity} />
          </div>
          <div>
            <Image
            className = "md:w-13.75 md:h-13.75 xl:w-17.5 xl:h-17.5"
              src={activeCity.current.icon}
              alt={activeCity.current.condition}
              width="40"
              height="40"
            />
          </div>
        </div>
      </section>
    </>
  );
}
