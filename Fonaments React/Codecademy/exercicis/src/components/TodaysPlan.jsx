import React from "react";

const TodaysPlan = () => {
  const fitfyFifty = Math.random() < 0.5;
  let where;
  if (fitfyFifty) where = "out";
  else where = "to bed";

  return <h2>Tonight I'm going to go {where}!!</h2>;
};

export default TodaysPlan;
