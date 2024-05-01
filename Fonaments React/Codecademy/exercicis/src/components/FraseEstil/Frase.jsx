import React from 'react';
import { styles } from "./Frase.styles"
import Frase2 from './Frase2';


const estilH2 = {
  fontFamily: styles.fontFamily,
  background: styles.background,
  fontSize: styles.fontSize,
  padding: styles.padding,
  color: styles.color
}

const Frase = () => (
  <div>
    <h2 style={estilH2} >
      Buenas, benvinguts
    </h2>
    <Frase2 />
  </div>
)

export default Frase;
