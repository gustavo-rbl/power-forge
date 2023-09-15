type ButtonTypes = {
  text: string;
  to: string;
  className: string;
};

import { Link } from "react-router-dom";

// style
import "./Button.scss";

function Button({ text, to, className }: ButtonTypes) {
  return (
    <Link to={to} className={`button ${className}`}>
      <p>{text}</p>
      <p className={`${className}_arrow`}>&rsaquo;</p>
    </Link>
  );
}

export default Button;
