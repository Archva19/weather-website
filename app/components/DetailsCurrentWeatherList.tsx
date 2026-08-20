export default function DetailsCurrentWeatherList({ item, listType }: any) {
  let weatherDetails = [];

  listType === "current"
    ? (weatherDetails = [
        {
          id: 1,
          title: "Temp max",
          value: item.tempMax + "°",
          icon: "icons/tempMax.svg",
        },
        {
          id: 2,
          title: "Temp min",
          value: item.tempMin + "°",
          icon: "icons/tempMin.svg",
        },
        {
          id: 3,
          title: "Humidity",
          value: item.humidity + "%",
          icon: "icons/humidity.svg",
        },
        {
          id: 4,
          title: "Cloudy",
          value: item.cloudiness + "%",
          icon: "icons/cloudiness.svg",
        },
        {
          id: 5,
          title: "Wind",
          value: item.wind + "km/h",
          icon: "icons/windIcon.svg",
        },
      ])
    : (weatherDetails = [
        {
          id: 1,
          title: "Temp max",
          value: item.tempMax + "°",
          icon: "icons/tempMax.svg",
        },
        {
          id: 2,
          title: "Temp min",
          value: item.tempMin + "°",
          icon: "icons/tempMin.svg",
        },
      ]);
  return (
    <>
      <div className = "w-full flex flex-col gap-7.5">
        {weatherDetails.map((item) => (
          <div
            key={item.id}
            className="w-full flex items-center justify-between"
          >
            <p className="text-[14px] opacity-70">{item.title}</p>
            <div className="flex items-center gap-[20.95px]">
              <p className="text-[14px]">{item.value}</p>
              <img src={item.icon} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
