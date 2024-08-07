import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios"



const APIKey = process.env.REACT_APP_WEATHER_API_KEY;


function App() {
  const [weather_data, setWeatherData] = useState([]);
  const [newLocation, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const cityName = "Boston"
  
  


  useEffect(() => {
    console.log("I am printing")
    const fetchData = async () => {
      try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`)
        setWeatherData([response.data])
        console.log(weather_data)
        setLoading(false);
      }catch(error){
        console.error(error)
        setLoading(false);
      }

    } 
    fetchData();
  }, [cityName])


const addLocation = async () => {
  console.log("New location: ", newLocation);
  if (!newLocation) return;
    setLoading(true);
  try {
    let params = {
      q: newLocation,
      appid : APIKey    
    }
  
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {params})
  console.log("Response: ", response.data);
  setWeatherData([...weather_data, response.data]);
  console.log("Weather data: ", weather_data);
  setLoading(false);
  setLocation("");
  }catch(error){
    console.error(error)

  }
  setLocation('')

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
  
      {loading  ? (
        <div>
          <span>Loading....</span>
</div>
        ): weather_data.length > 0 ? (
          weather_data.map((data, index) =>
          (
            <div key={index}>
              <h2> {data.name}</h2>
              <p>Weather: {data.weather[0].description}</p>
              <p> Humidity: {data.main.humidity}%</p>
              
              </div>
          )
        ))      
        :(
          <span>Weather data unavailable</span>
        )

       
    }
      </div>
);
}

export default App;
