import { useState } from "react";
import ResultBox from "./ResultBox";
import { API_KEY, API_URL } from "../../utils/constants";

const WeatherBox = () => {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState({
    name: "Wonderland",
    temp: "20",
    maxTemp: "20",
    minTemp: "20",
    humidity: "40",
    feelsLike: "19",
    description: "Spring",
  });

  const fetchData = async () => {
    try {
      const data = await fetch(
        `${API_URL}${searchText}&appid=${API_KEY}&units=metric`
      );
      const json = await data.json();
      //   console.log(json);
      const info = {
        name: json.name,
        temp: json.main.temp,
        maxTemp: json.main.temp_max,
        minTemp: json.main.temp_min,
        humidity: json.main.humidity,
        feelsLike: json.main.feels_like,
        description: json.weather[0].description,
      };
      //   console.log(info);
      setResult(info);
    } catch (error) {
      setError("No such place found!!");
    }
  };

  return (
    <div className="weather-box">
      <div className="input-box">
        <input
          type="text"
          value={searchText}
          placeholder="Enter your City name to get Weather"
          onChange={(event) => {
            setSearchText(event.target.value);
            setError("");
          }}
        />
        <button
          onClick={() => {
            fetchData();
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
      <span className="error">{error}</span>
      <ResultBox data={result} />
    </div>
  );
};

export default WeatherBox;
