import './App.css';
import React, {useState, useEffect} from "react";


function App() {

const [data, setData] = useState([])

useEffect(()=>{
  const fetchData = async () => {
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
  fetchData();

}, []);



  return (
    <div className="App">
      {data.length > 0 ? (
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
      )}
     
    </div>
  );
}

export default App;
