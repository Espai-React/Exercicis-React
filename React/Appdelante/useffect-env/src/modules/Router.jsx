import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inici from "../pages/Inici/Inici";
import Bloc from "../pages/Bloc/Bloc";
import Producte from "../pages/Producte/Producte";
import MissError from "../pages/MissError/Miss.Error";
import Formulari from "../pages/Formulari/Formulari";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={process.env.PUBLIC_URL}>
        <Route path="" element={<Inici />} />
        <Route path="bloc" element={<Bloc />} />
        {/* <Route path="producte/:id" element={<Producte />} /> */}
        <Route path="producte" element={<Producte />} />
        <Route path="formulari" element={<Formulari />} />
        <Route path="*" element={<MissError />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
