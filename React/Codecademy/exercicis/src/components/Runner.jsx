import React from "react";
import PropTypes from "prop-types";

const Runner = ({ message, style, isMetric, miles, milesToKm, races }) => {
  return (
    <div style={style}>
      <h2>{message}</h2>
      {isMetric && <h3>One time I ran {milesToKm} km</h3>}
      {miles && <h3>One time I ran {miles} miles</h3>}
      <h3>Races I've run</h3>
      <ul>
        {races.map((race, index) => (
          <li key={race + index}>{race}</li>
        ))}
      </ul>
    </div>
  );
};

Runner.propTypes = {
  message: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  isMetric: PropTypes.bool.isRequired,
  miles: PropTypes.number.isRequired,
  milesToKm: PropTypes.number.isRequired,
  races: PropTypes.array.isRequired,
};

Runner.defaultProps = {
  message: "Races of my life",
  style: {},
  isMetric: true,
  miles: 254,
  milesToKm: (254*1.61),
  races: ["Titan Desert", "Iron Man", "Cursa de la Mercè"],
};

export default Runner;
