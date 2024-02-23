import React from "react";
import ReactDOM from "react-dom/client";
import WeatherBox from "./src/components/WeatherBox";

const App = () => {
  return (
    <div className="root">
      <WeatherBox />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
