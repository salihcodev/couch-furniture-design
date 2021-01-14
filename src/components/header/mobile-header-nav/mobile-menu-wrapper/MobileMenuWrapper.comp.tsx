// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import SigningButton from '../../../signing-button/SigningButton.comp';

// IMPORT COMPONENTS:
import MenuShopBlocks from './menu-shop-blocks/MenuShopBlocks.comp';

// INTERFACE:
interface Props {}

// COMPONENT:=>
const MobileMenuWrapper: React.FC<Props> = () => {
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
          >
            new
          </NavLink>
        </li>
        <li className="nav-route reg-route">
          <NavLink
            activeClassName="active-route"
            to="/limited-release"
            className="route-link"
          >
            limited release
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default MobileMenuWrapper;
