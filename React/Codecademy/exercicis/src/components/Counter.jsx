import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //useEffect(() => alert(`Count: ${count}`));

  return (
    <div>
      <p>Has clicat {count} vegades</p>
      <button onClick={() => setCount((count) => count + 1)}>Clica!</button>
    </div>
  );
}
