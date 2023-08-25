import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        const data = res.json();
        return data
      })
      .then((data) => setData(data))
      // .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
    
    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    loading,
    data,
    error,
  };
};
