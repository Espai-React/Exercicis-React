//import { useFetch } from "../../hooks/useFetch";
//import { useFetch2 } from "../../hooks/useFetch2";
import { useFetch3 } from "../../hooks/useFetch3";
import Llista from "./Llista";

const Todos = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, loading, isError, isSuccess } = useFetch3(url);
  console.log(data, loading, isError, isSuccess);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      {isSuccess && <Llista data={data} />}
    </div>
  );
};

export default Todos;
