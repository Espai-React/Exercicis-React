import { useState, useEffect } from "react";

const useEfect = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 0) return
    document.title = (step > 0) ? `Inc ${step}` : `Dec ${step}`;
  }, [step]);

  return (
    <div>
      <button onClick={() => setCount(count + step)}>Botó comptador</button>
      <button onClick={() => setStep(step + 1)}>Increment</button>
      <button onClick={() => setStep(step - 1)}>Decrement</button>
      <p>Compte {count}</p>
      <p>Interval {step}</p>

    </div>
  );
};

export default useEfect;
