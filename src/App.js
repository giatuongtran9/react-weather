
import './App.css';
import CurrentWeather from './components/Search/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search';

import { WEATHER_URL ,WEATHER_API_KEY } from './api'
import { useState } from 'react';
import Forecast from './components/Forecast/Forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const fetchCurrentWeather = fetch(`${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    
    const fetchForecastWeather = fetch(`${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([fetchCurrentWeather, fetchForecastWeather])
    .then(async (response) => {
      const currentWeatherRes = await response[0].json();
      const forecastWeatherRes = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...currentWeatherRes })
      setForecastWeather({ city: searchData.label, ...forecastWeatherRes })
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  );
}

export default App;
