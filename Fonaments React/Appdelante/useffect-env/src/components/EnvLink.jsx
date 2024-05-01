import { Link } from "react-router-dom";

export const EnvLink = ({ to, ...props }) => (
  <Link {...props} to={process.env.PUBLIC_URL + to} />
);
