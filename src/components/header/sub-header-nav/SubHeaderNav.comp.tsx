// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';

// IMPORT COMPONENTS:
import SigningButton from '../../signing-button/SigningButton.comp';

// COMPONENT:=>
const SubHeaderNav = () => {
  return (
    <nav className="sub-navbar">
      <div className="wing left-wing">
        <Link to="/reade" className="trade-contract">
          trade & contract
        </Link>
      </div>
      <div className="wing right-wing">
        <div className="signing">
          <SigningButton
            name="Login"
            path="/signin"
            borderClr="#ccc"
            borderW={1}
            bkg="transparent"
            clr="#999"
            logIn
          />

          <SigningButton
            name="Sign up"
            path="/signup"
            borderClr="transparent"
            borderW={1}
            bkg="#1f2833"
            clr="#ddd"
            logIn={false}
          />
        </div>
      </div>
    </nav>
  );
};

export default SubHeaderNav;
