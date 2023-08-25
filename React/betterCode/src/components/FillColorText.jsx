import { useEffect, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

const FillColorText = ({ comptador }) => {
  const [rerender, setRerender] = useState(false);
  console.log("comptador", comptador, "rerender", rerender);

  const ferConsole = useMemo(() => {
    rerender && console.count("Rerender: ");
    return rerender;
  }, [rerender]);
  console.log("ferConsole", ferConsole);

  useEffect(() => {
    comptador % 5 === 0 ? setRerender(true) : setRerender(false);
  }, [comptador]);

  return (
    rerender && (
      <div>
        <p>Rerender múltiple de 5</p>
        <p>Comptador: {comptador}</p>
      </div>
    )
  );
};

FillColorText.propTypes = {
  comptador: PropTypes.number.isRequired,
};

export default FillColorText;
