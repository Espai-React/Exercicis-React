import { useMemo } from "react";
import { useFetch } from "./fetch";

const Fetch = () => {
  const { loading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  // console.log("loading", loading, "data", data, "error", error);
  const shortData = useMemo(
    () => (data && data.length > 5 ? data.slice(0, 5) : data),
    [data]
  );
  // console.log(shortData);

  return (
    <div>
      <h3>Fetch </h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {shortData &&
        shortData.map((todo) => (
          <div key={todo.id} style={{ listStyle: "none" }}>
            <li>{todo.title}</li>
          </div>
        ))}
    </div>
  );
};

export default Fetch;
