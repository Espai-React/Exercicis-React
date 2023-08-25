import { useState, useEffect } from "react";

export const useFetch2 = (URL) => {
  const REGSTATUS = {
    INITIAL: "INITIAL",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    LOADING: "LOADING",
  };
  
  const [regStatus, setRegStatus] = useState(REGSTATUS.INITIAL);
  const [data, setData] = useState([]);  

  useEffect(() => {
    const controller = new AbortController();
    setRegStatus(REGSTATUS.LOADING);
    setTimeout(
      () => fetchData(URL, controller.signal, REGSTATUS, setRegStatus, setData),
      2000
    );
    return () => controller.abort();
  }, []);

  return {
    regStatus,
    REGSTATUS,
    data,
  };
};

const fetchData = async (URL, signal, REGSTATUS, setRegStatus, setData) => {
  try {
    const response = await fetch(URL, { signal });
    const data = await response.json();
    setData(data);
    setRegStatus(REGSTATUS.SUCCESS);
  } catch (err) {
    setRegStatus(REGSTATUS.ERROR);
  }
};
