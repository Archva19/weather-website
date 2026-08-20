import FutureForecastItem from "./FutureForecastItem";

export default function FutureForecast({ forecast }: any) {
  return (
    <>
      <div className="w-full items-center flex flex-col gap-9.25">
        <p className="text-[14px] ">Future's Weather Forecast...</p>
        <div className="w-full flex flex-col gap-7.5">
          {forecast.map((item: any) => (
            <FutureForecastItem key = {item.date} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

// "forecast": [
//         {
//           "date": "2026-08-20",
//           "day": "Thursday",
//           "temperature": 19,
//           "tempMin": 15,
//           "tempMax": 19,
//           "condition": "snow",
//           "description": "SNOW",
//           "icon": "icons/snowIcon.svg"
//         },
//         {
//           "date": "2026-08-21",
//           "day": "Friday",
//           "temperature": 18,
//           "tempMin": 14,
//           "tempMax": 18,
//           "condition": "cloudy",
//           "description": "PARTLY CLOUDY",
//           "icon": "icons/cloudyIcon.svg"
//         },
//         {
//           "date": "2026-08-22",
//           "day": "Saturday",
//           "temperature": 17,
//           "tempMin": 13,
//           "tempMax": 18,
//           "condition": "rain",
//           "description": "LIGHT RAIN",
//           "icon": "icons/rainIcon.svg"
//         },
//         {
//           "date": "2026-08-23",
//           "day": "Sunday",
//           "temperature": 20,
//           "tempMin": 15,
//           "tempMax": 20,
//           "condition": "clear",
//           "description": "CLEAR SKY",
//           "icon": "icons/clearIcon.svg"
//         },
//         {
//           "date": "2026-08-24",
//           "day": "Monday",
//           "temperature": 21,
//           "tempMin": 16,
//           "tempMax": 21,
//           "condition": "cloudy",
//           "description": "PARTLY CLOUDY",
//           "icon": "icons/cloudyIcon.svg"
//         },
//         {
//           "date": "2026-08-25",
//           "day": "Tuesday",
//           "temperature": 18,
//           "tempMin": 14,
//           "tempMax": 19,
//           "condition": "drizzle",
//           "description": "LIGHT DRIZZLE",
//           "icon": "icons/drizzleIcon.svg"
//         },
//         {
//           "date": "2026-08-26",
//           "day": "Wednesday",
//           "temperature": 17,
//           "tempMin": 13,
//           "tempMax": 18,
//           "condition": "rain",
//           "description": "RAIN",
//           "icon": "icons/rainIcon.svg"
//         }
//       ]
//     },
