import { createContext, useState } from "react";
import Login from './UseContLogin';
import Usuari from './UseContUsuari';

export const AppContext = createContext(null);

const UseContext = () => {
  const [usuari, setUsuari] = useState("");

  return (
    <div>
      <h2>useContext</h2>
      <hr />
      <AppContext.Provider value={{usuari, setUsuari}}>
        <Login />
        <Usuari />
      </AppContext.Provider>
    </div>
  );
};

export default UseContext;
