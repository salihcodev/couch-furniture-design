// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// INTERFACE:
interface ButtonProps {
  name: string;
  path: string;
  borderClr: string;
  borderW: number;
  bkg: string;
  clr: string;
  logIn: boolean;
}

// COMPONENT:=>
const SigningButton: React.FC<ButtonProps> = ({
  name,
  path,
  borderClr,
  borderW,
  bkg,
  clr,
  logIn,
}) => {
  const btnStyles = {
    background: bkg,
    color: clr,
    borderColor: borderClr,
    borderWidth: borderW,
    justifyContent: logIn ? `space-around` : 'center',
  };

  return (
    <NavLink
      activeClassName="active-route-signing"
      className="signing-btn"
      role="button"
      to={path}
      style={btnStyles}
    >
      {name}
      <span className="icon">{logIn ? <FiLogIn /> : ''}</span>
    </NavLink>
  );
};

export default SigningButton;
