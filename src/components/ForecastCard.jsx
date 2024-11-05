import ReactAnimatedWeather from "react-animated-weather";
const ForecastCard = ({ forecast, unit, weather }) => {
  const unitLabel = unit === "metric" ? "C" : "F";

  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case "clear":
        return { icon: "CLEAR_DAY", color: "#FFD700" };
      case "clouds":
        return { icon: "CLOUDY", color: "#fff" };
      case "rain":
        return { icon: "RAIN", color: "#00BFFF" };
      case "snow":
        return { icon: "SNOW", color: "#ADD8E6" };
      case "thunderstorm":
        return { icon: "RAIN", color: "#800080" };
      default:
        return { icon: "CLOUDY", color: "#fff" };
    }
  };
  const { icon, color } = getWeatherIcon(weather.description);

  return (
    <div className="card md:p-3 p-2 rounded-lg shadow-md text-center grid  xl:w-2/12 justify-center">
      <p className="text-sm font-semibold">{forecast.day}</p>
      <div className="flex  my-2 justify-evenly items-center gap-1">
        <ReactAnimatedWeather
          icon={icon}
          color={color}
          size={25}
          animate={true}
        />
        <p className="text-base">
          {forecast.temp}
          <span className="text-sm align-top">°{unitLabel}</span>
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;
