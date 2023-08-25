import axios from "axios";
import { useEffect, useState, useMemo } from "react";

const UseMemo = () => {
  const [data, setData] = useState(null);
	const [commuta, setCommuta] = useState(false);
	//console.log(data);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setData(response.data));
  }, []);
  
  const memoTrobaNomLlarg = useMemo(() => {
    const trobaNomLlarg = (data) => {
      if (!data) return null;
      let nomLlarg = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].name.length > nomLlarg.length) nomLlarg = data[i].name;
      }
      //console.log("Nom trobat!");
      return nomLlarg;
    }
    return trobaNomLlarg(data)
  },
    [data]
  );

  //console.log(memoTrobaNomLlarg);

  return (
    <div>
      <h2>useMemo</h2>
      <hr />
      <div>{memoTrobaNomLlarg}</div>
      <div>
        <button onClick={() => setCommuta(!commuta)}>Clica!</button>
        <p>&nbsp;{commuta && <span>Ha commutat!</span>}</p>
      </div>
    </div>
  );
};

export default UseMemo;
