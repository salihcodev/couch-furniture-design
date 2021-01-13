// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import { IoBagOutline, IoHeartOutline } from 'react-icons/io5';

// IMPORT COMPONENTS:
import { ReactComponent as Logo } from '../../../assets/couchFurnitureDesign.logo-min.svg';
import MobileMenuWrapper from './mobile-menu-wrapper/MobileMenuWrapper.comp';

// INTERFACE:
interface Props {}

// COMPONENT:=>
const MobileHeaderNav: React.FC<Props> = () => {
  return (
    <nav className="mobile-header-nav">
      {/* toggler */}
      <button className="sm-menu-toggler" onClick={() => console.log('hi')}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="nav-logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <ul className="routes-list">
        <li className="nav-route icon-route wishlist">
          <NavLink
            activeClassName="active-route"
            to="/wishlist"
            className="route-link"
          >
            <IoHeartOutline title="Your wishlist" />
            <span className="count">5</span>
          </NavLink>
        </li>
        <li className="nav-route icon-route bag">
          <NavLink
            activeClassName="active-route"
            to="/bag"
            className="route-link"
          >
            <IoBagOutline title="Your shopping bag" />
          </NavLink>
          <span className="count">5</span>
        </li>
      </ul>
      <MobileMenuWrapper />
    </nav>
  );
};

export default MobileHeaderNav;
