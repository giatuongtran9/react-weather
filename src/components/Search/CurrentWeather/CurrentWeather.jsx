import React from 'react';

import "./CurrentWeather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className='currentWeather-container'>
            <div className="currentWeather-top">
                <div>
                    <p className='currentWeather-city'>{data.city}</p>
                    <p className='currentWeather-desc'>{data.weather[0].description}</p>
                </div>
                
                <img alt="current-weather" className='currentWeather-icon' src={`img/${data.weather[0].icon}.png`}/>
            </div>

            <div className="currentWeather-bottom">
                <p className="currentWeather-temp">{Math.round(data.main.temp)}°C</p>
                <div className='currentWeather-details'>
                    <div className="parameter-row">
                        <div className="parameter-label top">Details</div>
                    </div>

                    <div className="parameter-row">
                        <div className="parameter-label">Feels Like</div>
                        <div className="parameter-value">{data.main.feels_like} °C</div>
                    </div>

                    <div className="parameter-row">
                        <div className="parameter-label">Wind</div>
                        <div className="parameter-value">{data.wind.speed} m/s</div>
                    </div>

                    <div className="parameter-row">
                        <div className="parameter-label">Humidity</div>
                        <div className="parameter-value">{data.main.humidity} %</div>
                    </div>

                    <div className="parameter-row">
                        <div className="parameter-label">Pressure</div>
                        <div className="parameter-value">{data.main.pressure} hPa</div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default CurrentWeather;