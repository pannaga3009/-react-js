import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios"


function App() {

const [data, setData] = useState([])
const [bikeData, setBikeData] = useState([])

useEffect(()=>{
  const fetchDataflood = async () => {
    try{
      const response = await fetch('https://environment.data.gov.uk/flood-monitoring/data/readings/')
      if (!response.ok){
        throw new Error('Network response was not okay')
      }
      const result = await response.json();
      console.log(result); // Inspect the structure of the data
      setData(result.items || []); // Assuming 'items' is the key with relevant data

    }catch(error){
      console.error('Error fetching data:', error)
    }
  };

  const fetchDatabikenyc = async () => {
    try {
      const response = await axios.get('https://gbfs.citibikenyc.com/gbfs/gbfs.json');
      setBikeData(response.data)
      console.log('Fetched tasks:', response.data);
      
    }
  catch(error){
    console.error("Error fetching", error)
  }
  console.log("The bikedata ---- ",bikeData)
  }

  fetchDataflood();
  fetchDatabikenyc();
}, []);



  return (
    <div className="App">
      {/* {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <p><strong>Measurement ID:</strong> {item.measurementId}</p>
              <p><strong>Value:</strong> {item.value}</p>
              <p><strong>Timestamp:</strong> {item.dateTime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )} */}


      {bikeData.data ? (
        <ul>
          {Object.keys(bikeData.data).map((key, index) => (
            <li key={index}>
              <h3>{key}</h3>
              <p><strong> url : </strong> {JSON.stringify(bikeData.data[key])}</p>

            </li>
          ))}
        </ul>

      ):(
        <p>Loading...</p>
      )

      }
     
    </div>
  );
}

export default App;
