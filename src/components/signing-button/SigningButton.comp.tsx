// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { connect } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/mobile-menu/mobileMenu.action';

// INTERFACE:
interface ButtonProps {
  name: string;
  path: string;
  borderClr: string;
  borderW: number;
  bkg: string;
  clr: string;
  logIn: boolean;
  toggleMenuVisibility: any;
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
  toggleMenuVisibility,
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
      onClick={toggleMenuVisibility}
    >
      {name}
      <span className="icon">{logIn ? <FiLogIn /> : ''}</span>
    </NavLink>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenuVisibility: () => dispatch(toggleMenuVisibility()),
});

export default connect(null, mapDispatchToProps)(SigningButton);
