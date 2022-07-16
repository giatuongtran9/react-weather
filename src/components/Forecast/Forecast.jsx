import React from "react";
import "./Forecast.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const currentDay = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, currentDay)
  );

  return (
    <>
      <label className="forecast-title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="forecast-daily">
                  <img
                    alt="weather"
                    className="forecast-icon"
                    src={`img/${item.weather[0].icon}.png`}
                  />
                  <label className="forecast-day">{forecastDays[i]}</label>
                  <label className="forecast-desc">
                    {item.weather[0].description}
                  </label>
                  <label className="forecast-min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="forecast-item">
                <div className="forecast-detail">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>

                <div className="forecast-detail">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>

                <div className="forecast-detail">
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>

                <div className="forecast-detail">
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>

                <div className="forecast-detail">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>

                <div className="forecast-detail">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
