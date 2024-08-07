import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

const APIKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weather_data, setWeatherData] = useState([]);
  const [newLocation, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cityName = "Denver";

  useEffect(() => {
    console.log("I am printing")
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`)
        const weather = {
          city: response.data.name,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
        }
        setWeatherData([weather]);
        console.log("IS weather data set:", weather_data)
        setLoading(false);
      } catch (error) {
        console.error(error)
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    console.log("Weather data updated:", weather_data);
  }, [weather_data]);
  
  const addLocation = async () => {
    console.log("New location: ", newLocation);
    if (!newLocation) return;
    setLoading(true);
    setError(null);  // Reset error state
    try {
      let params = {
        q: newLocation,
        appid: APIKey    
      }
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, { params })
      console.log("Response: ", response.data);
      const weather = {
        city: response.data.name,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity
      };
      console.log("after setting weather", weather.description)
      axios.post('http://localhost:8000/weather/add/', weather);
      //Directly updating the state using the current state value, potential issue with asynchronous update
      // setWeatherData([...weather_data, weather]);
      
      //The functional update ensures that the new state includes both the old and new weather data
      setWeatherData(prevData => [...prevData, weather])
      //This ensures that the update uses the most recent state.
      setLoading(false);
      setLocation("");
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
    setLocation('');
  }

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={newLocation}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a city"
      />
      <button onClick={addLocation}>Add Location</button>

      {loading ? (
        <div>
          <span>Loading....</span>
        </div>
      ) : error ? (
        <div>
          <span>Error loading data: {error.message}</span>
        </div>
      ) : weather_data.length > 0 ? (
        weather_data.map((data, index) => (
          <div key={index}>
            <h2>{data.city}</h2>
            <p>Weather: {data.description}</p>
            <p>Humidity: {data.humidity}%</p>
          </div>
        ))
      ) : (
        <span>Weather data unavailable</span>
      )}
    </div>
  );
}

export default App;
