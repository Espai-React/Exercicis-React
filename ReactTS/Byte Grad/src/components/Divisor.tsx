import React from "react";

type TDivisor = {
  titol: string;
  fonSize: string;
};

const Divisor:  React.FC<TDivisor> = ({ titol, fonSize }) => (
  <div className='w-full'>
    <p className={fonSize}>{titol}</p>
    <hr className='mx-auto w-2/3 border-orange-300 border-2 my-2' />
  </div>
);

export default Divisor;
