import Image from "next/image";
import GetCurrentTime from "./GetCurrentTime";

export default function CurrentWeather({ activeCity }: any) {
  return (
    <>
      <section className="flex items-center gap-2.5 mx-auto w-[88.8%] text-white">
        <p className="text-[64px] tracking-[-8%] mb-1.5 w-21.5">
          {activeCity.current.temperature}°
        </p>
        <div className="flex items-end gap-2">
          <div className="flex flex-col gap-0.5">
            <p className="text-[30px]">{activeCity.name}</p>
            <GetCurrentTime activeCity={activeCity} />
          </div>
          <div>
            <Image
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
