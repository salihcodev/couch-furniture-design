// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import { IoBagOutline, IoHeartOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import {
  toggleMenuVisibility,
  closeMobileMenu,
} from '../../../redux/mobile-menu/mobileMenu.action';

// IMPORT COMPONENTS:
import { ReactComponent as Logo } from '../../../assets/couchFurnitureDesign.logo-min.svg';
import MobileMenuWrapper from './mobile-menu-wrapper/MobileMenuWrapper.comp';

// INTERFACE:
interface Props {
  toggleMenuVisibility: () => any;
  closeMobileMenu: () => any;
  menuHidden: boolean;
}

// COMPONENT:=>
const MobileHeaderNav: React.FC<Props> = ({
  toggleMenuVisibility,
  closeMobileMenu,
  menuHidden,
}) => {
  return (
    <nav className="mobile-header-nav">
      {/* toggler */}
      <button className="sm-menu-toggler" onClick={toggleMenuVisibility}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="nav-logo">
        <NavLink to="/" onClick={closeMobileMenu}>
          <Logo />
        </NavLink>
      </div>
      <ul className="routes-list">
        <li className="nav-route icon-route wishlist">
          <NavLink
            activeClassName="active-route"
            to="/wishlist"
            className="route-link"
            onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
          >
            <IoBagOutline title="Your shopping bag" />
          </NavLink>
          <span className="count">5</span>
        </li>
      </ul>
      {menuHidden ? null : <MobileMenuWrapper />}
    </nav>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenuVisibility: () => dispatch(toggleMenuVisibility()),
  closeMobileMenu: () => dispatch(closeMobileMenu()),
});

const mapStateToProps = ({ mobileMenu: { menuHidden } }: any) => ({
  menuHidden: menuHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeaderNav);
