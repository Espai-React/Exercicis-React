import { useState, useEffect } from "react";
import { KEYS } from "../constants/keys";

const useWeather = () => {
  const [weather, setWeather] = useState({
    data: [],
    loading: true,
    error: true,
  });

  const setData = (newData) =>
    setWeather({ data: newData, loading: false, error: false });
  const setError = (newError) =>
    setWeather({ data: [], loading: false, error: newError });

  useEffect(() => {
    const controller = new AbortController();
    fetchData(setData, setError, controller.signal);
    return () => controller.abort();
  }, []);

  return { data: weather.data, loading: weather.loading, error: weather.error };
};

const fetchData = async (setData, setError, signal) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${KEYS.apiLatLon}&appid=${KEYS.apiKey}&lang=${KEYS.apiLang}&units=${KEYS.apiUnit}`,
      { signal }
    );
    const data = await response.json();
    setData(data);
  } catch (err) {
    setError(err.message);
  }
};

export default useWeather;
