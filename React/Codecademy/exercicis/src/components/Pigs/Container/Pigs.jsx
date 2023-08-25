import React, { useState, useEffect } from 'react';
import PPIGS from '../Presentational/PPigs';

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

const Pigs = () => {

  const [state, setState] = useState({ currentGP: 0 });

  useEffect(() => {
    const interval = setInterval(() => {

      let current = state.currentGP;
      let next = ++current % GUINEAPATHS.length;
      setState({ currentGP: next });
    }, 3000);
    return () => clearInterval(interval);
  }, [state]);

  let src = GUINEAPATHS[state.currentGP];

  return (
    <PPIGS src={src}/>
  );
};

export default Pigs;
