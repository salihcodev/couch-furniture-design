// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import SigningButton from '../../../signing-button/SigningButton.comp';
import { connect } from 'react-redux';
import { toggleMenuVisibility } from '../../../../redux/mobile-menu/mobileMenu.action';

// IMPORT COMPONENTS:
import MenuShopBlocks from './menu-shop-blocks/MenuShopBlocks.comp';

// INTERFACE:
interface Props {
  toggleMenuVisibility: () => any;
}

// COMPONENT:=>
const MobileMenuWrapper: React.FC<Props> = ({ toggleMenuVisibility }) => {
  return (
    <section className="mobile-menu-wrapper">
      <div className="signing">
        <SigningButton
          name="Login"
          path="/signin"
          borderClr="#ccc"
          borderW={0}
          bkg="transparent"
          clr="#999"
          logIn
        />
        <SigningButton
          name="Sign up"
          path="/signup"
          borderClr="#ccc"
          borderW={0}
          bkg="transparent"
          clr="#999"
          logIn={false}
        />
      </div>
      <ul className="mobile-routes-list">
        <li className="nav-route reg-route" id="shop-route">
          <NavLink
            activeClassName="active-route"
            to="/shop"
            className="route-link"
            onClick={toggleMenuVisibility}
          >
            shop
          </NavLink>
        </li>

        {/* menu shop blocks */}
        <MenuShopBlocks />

        <li className="nav-route reg-route">
          <NavLink
            activeClassName="active-route"
            to="/new"
            className="route-link"
            onClick={toggleMenuVisibility}
          >
            new
          </NavLink>
        </li>
        <li className="nav-route reg-route">
          <NavLink
            activeClassName="active-route"
            to="/limited-release"
            className="route-link"
            onClick={toggleMenuVisibility}
          >
            limited release
          </NavLink>
        </li>
        <li className="nav-route reg-route">
          <NavLink
            activeClassName="active-route"
            to="/contact"
            className="route-link"
            onClick={toggleMenuVisibility}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-route reg-route">
          <NavLink
            activeClassName="active-route"
            to="/company"
            className="route-link"
            onClick={toggleMenuVisibility}
          >
            Company
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenuVisibility: () => dispatch(toggleMenuVisibility()),
});
export default connect(null, mapDispatchToProps)(MobileMenuWrapper);
