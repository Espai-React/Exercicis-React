import PropTypes from "prop-types";
import { colors } from "../../styles/index";

const Button = ({ children, color = colors.main, onClick = () => {} }) => (
  <button type="button" onClick={onClick} style={{ backgroudColor: { color } }}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
