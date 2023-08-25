import { useState, useEffect } from "react";

export const useFetch3 = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((response) => response.json())
      .then((d) => {
        setData(d);
        setLoading(false);
        console.log(d);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return {data, loading, isError: !!error, isSuccess: !!data}
};

