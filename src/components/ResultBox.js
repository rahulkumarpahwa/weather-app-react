import {
  DEFAULT_IMG,
  SUMMER_IMG,
  WINTER_IMG,
  RAIN_IMG,
} from "../../utils/constants";

const ResultBox = (props) => {
  //   console.log(props.data);
  const info = props.data;
  return (
    <div className="result-box">
      <img
        className="result-img"
        src={
          info.name === "Wonderland"
            ? DEFAULT_IMG
            : info.humidity > 80
            ? RAIN_IMG
            : info.temp > 20
            ? SUMMER_IMG
            : WINTER_IMG
        }
      ></img>
      <h1>{info.name}</h1>
      <p>Temperature : {info.temp}&deg;C</p>
      <p>Maximum Temperature : {info.maxTemp}&deg;C</p>
      <p>Minimum Temperature : {info.minTemp}&deg;C</p>
      <p>Humidity : {info.humidity}%</p>
      <p>
        The weather can be seen as "{info.description}" and feels like{" "}
        {info.temp}&deg;C
      </p>
      <p className="about">
        Click <a href="https://linkedin.com/in/rahulkumarpahwa">Here</a> To Know
        More.
      </p>
    </div>
  );
};

export default ResultBox;
