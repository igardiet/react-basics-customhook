import { useEffect, useState } from "react";

export const useWeather = (city = "Madrid") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&hourly=temperature_2m`
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData({
            city,
            temp: json.main.temp,
            tMin: json.main.tMin,
            tMax: json.main.tMax
        });
      })
      .catch((error) => {
        setData(null);
        setError(error);
      });
  }, [city]);

  return [data, loading, error];
};
