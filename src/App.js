import './App.css';
import Search from './components/search/search';
import Forecast1 from './components/forecast/forecast1';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState, useEffect } from 'react';
import Footer from './components/footer/footer'
import Loader from './components/loader/Loader';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    setTimeout( () => {
      setLoading(false);
    }, 1000);
  }, [])


  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label,...weatherResponse});
      setForecast({ city: searchData.label,...forecastResponse});
    }).catch((err) => {
      console.log(err);
    })
  }

  //  console.log(currentWeather);
  //  console.log(forecast);
  return (
    <div className="container">
      { loading ? <Loader /> :  
        <div className="container">
          <Search onSearchChange={handleSearchChange} />
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast1 data={forecast } />}
          <Footer />
        </div>
      }
      
    </div>
  );
}

export default App;
