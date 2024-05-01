import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Comptador,
  ComptadorUseEffect,
  Fetch,
  Form,
  FullName,
  IntervalEffect,
  Metodes3,
  PintaArray,
  TocarArray,
  Todos,
  User,
  FetchDataUseEffect,
  FetchUsuaris,
  FetchUsuarisAxios,
  Usuaris,
  EstatIndefinit,
  ControlProductes,
  ColorText
} from "./components";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      complete: false,
      name: "todo 1",
    },
    {
      id: 2,
      complete: true,
      name: "todo 2",
    },
    {
      id: 3,
      complete: false,
      name: "todo 3",
    },
  ];

  return (
    <>
      <EstatIndefinit />
      <hr />
      <Comptador initialCount={27} />
      <hr />
      <ComptadorUseEffect />
      <hr />
      <User age={45} />
      <hr />
      <ColorText />
      <hr />
      <Todos initialTodos={initialTodos} />
      <hr />
      <ControlProductes />
      <hr />
      <FullName />
      <hr />
      <Form />
      <hr />
      <Metodes3 />
      <hr />
      <PintaArray />
      <hr />
      <TocarArray />
      <hr />
      <IntervalEffect />
      <hr />
      <Fetch />
      <hr />
      <FetchDataUseEffect/>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Usuaris />} />
          <Route path="/fetch" element={<FetchUsuaris />} />
          <Route path="/users/:id" element={<FetchUsuaris />} />
          <Route path="/axios" element={<FetchUsuarisAxios />} />
          <Route path="/users/:ida" element={<FetchUsuarisAxios />} />
          </Routes>
      </BrowserRouter>
      <hr />
    </>
  );
};

export default App;
