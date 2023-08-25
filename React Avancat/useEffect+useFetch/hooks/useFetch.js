import { useState, useEffect } from "react";

export const useFetch = (URL) => {
  const [tasks, setTasks] = useState({
    isSuccess: false,
    isError: false,
    loading: true,
    data: [],
  });

  const setData = (newData) =>
    setTasks({
      isSuccess: true,
      isError: false,
      loading: false,
      data: newData,
    });
  const setError = (newError) =>
  setTasks({ isSuccess: false, isError: newError, loading: false, data: [] });
  
  useEffect(() => {
    const controller = new AbortController();    
    setTimeout(() => fetchData(setData, setError, URL, controller.signal), 1000);
    return () => controller.abort();
  }, []);

  return {
    isSuccess: tasks.isSuccess,
    isError: tasks.isError,
    loading: tasks.loading,
    data: tasks.data,
  };
};

const fetchData = async (setData, setError, URL, signal) => {
  try {
    const response = await fetch(URL, { signal });
    const data = await response.json();
    setData(data);
  } catch (err) {
    setError(err.message);
  }
};
