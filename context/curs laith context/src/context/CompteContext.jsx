import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const CompteContext = createContext();

export const CompteProvider = ({ children }) => {
  const [compte, setCompte] = useState(0);
  return (
    <CompteContext.Provider value={{ compte, setCompte }}>
      {children}
    </CompteContext.Provider>
  );
};

CompteProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validem que children sigui un node requerit
};

