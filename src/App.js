import { useState } from 'react';
import { useWeather } from './hooks/useWeather';

function App() {

  const [city, setCity] = useState('Barcelona')
  const [data, loading, error ] = useWeather(city)

  return (
    <div className="App">
      <input type="text" onChange={(event) => {
        setCity(event.target.value)
      }} />
      {loading && (
        <div>
          <p>Fetching data...</p>
        </div>
      )}
      {error && (
        <div>
          <p>Data could not be retrieved</p>
        </div>
      )}
      {data && (
        <div>
          <p>City: {data.city}</p>
          <p>Temperature: {data.temp}</p>
          <p>Min temperature: {data.tMin}</p>
          <p>Max temperature: {data.tMax}</p>

        </div>
      )}
    </div>
  );
}

export default App;
