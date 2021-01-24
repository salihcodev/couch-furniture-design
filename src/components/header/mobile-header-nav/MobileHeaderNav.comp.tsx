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
import ToAddListWrapper from '../../../components/to-add-list-wrapper/ToAddListWrapper.comp';
import { ReactComponent as Logo } from '../../../assets/couchFurnitureDesign.logo-min.svg';
import MobileMenuWrapper from './mobile-menu-wrapper/MobileMenuWrapper.comp';

// INTERFACE:
interface Props {
  toggleMenuVisibility: () => any;
  closeMobileMenu: () => any;
  menuHidden: boolean;
  bagList: Array<[]>;
  wishlist: Array<[]>;
}

// COMPONENT:=>
const MobileHeaderNav: React.FC<Props> = ({
  toggleMenuVisibility,
  closeMobileMenu,
  menuHidden,
  bagList,
  wishlist,
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
            {wishlist?.length > 0 && (
              <span className="count">
                {wishlist?.length > 9 ? '9+' : wishlist?.length}
              </span>
            )}
          </NavLink>
          <ToAddListWrapper
            listItems={wishlist}
            width={16}
            redirectTo="/wishlist"
            redirectTxt="Go to wishlist"
            isWishlist={true}
          />
        </li>
        <li className="nav-route icon-route bag">
          <NavLink
            activeClassName="active-route"
            to="/bag"
            className="route-link"
            onClick={closeMobileMenu}
          >
            <IoBagOutline title="Your shopping bag" />
            {bagList?.length > 0 && (
              <span className="count">
                {bagList?.length > 9 ? '9+' : bagList?.length}
              </span>
            )}
          </NavLink>
          <ToAddListWrapper
            listItems={bagList}
            width={16}
            redirectTxt="Checkout"
            redirectTo="/bag"
          />
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

const mapStateToProps = ({
  mobileMenu: { menuHidden },
  bag: { bagList },
  wishlist: { wishlist },
}: any) => ({
  menuHidden: menuHidden,
  bagList: bagList,
  wishlist: wishlist,
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeaderNav);
