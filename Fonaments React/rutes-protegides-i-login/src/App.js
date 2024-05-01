import "./App.css";
import {BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';
import Home from "./components/Home";
import Protegit from './components/Protegit';
import Desprotegit from './components/Desprotegit';
import { useState } from 'react';

function App() {

  const [isAuth, setisAuth] = useState(false);

  const login = () => {
    setisAuth(true);
    console.log("Usuari autenticat");
  }

  const logout = () => {
    setisAuth(false);
    console.log("Usuari no autenticat");
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="desProtegit" element={<DesProtegit />}/>
          <Route
            path="protegit"
            element={
              isAuth ? <Protegit /> : <Navigate to="/"/>
            }
          />
        </Routes>

        <nav>
          <ul>
            <li><Link to="/">Pàgina principal</Link></li>
            <li><Link to="protegit">Ruta protegida</Link></li>
            <li><Link to="desprotegit">Ruta desprotegida</Link></li>
          </ul>
        </nav>

        <button onClick={login}>Log in</button>
        <button onClick={logout}>Log out</button>

      </BrowserRouter>
    </div>
  );
}

export default App;
