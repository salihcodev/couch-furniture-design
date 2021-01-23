// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

// IMPORT COMPONENTS:
import { ReactComponent as Logo } from '../../../assets/couchFurnitureDesign.logo-min.svg';
import { IoBagOutline, IoHeartOutline } from 'react-icons/io5';
import ShopMenu from './shop-menu/ShopMenu.comp';
import ToAddListWrapper from '../../../components/to-add-list-wrapper/ToAddListWrapper.comp';

// INTERFACE:
interface DefaultHeaderNavProps {
  bagList: Array<[]>;
  wishlist: Array<[]>;
}

// COMPONENT:=>
const DefaultHeaderNav: React.FC<DefaultHeaderNavProps> = ({
  bagList,
  wishlist,
}) => {
  return (
    <Container fluid>
      <nav className="default-header-nav">
        <div className="nav-logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="nav-routes">
          <div className="wing left-routes">
            <ul className="routes-list">
              <li className="nav-route reg-route" id="shop-route">
                <NavLink
                  activeClassName="active-route"
                  to="/shop"
                  className="route-link"
                >
                  shop
                </NavLink>

                {/* shop lists */}
                <ShopMenu />
              </li>
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
          </div>
          <div className="wing right-routes">
            <ul className="routes-list">
              {/* routes with no icons regular routes :') */}
              <li className="nav-route reg-route">
                <NavLink
                  activeClassName="active-route"
                  to="/company"
                  className="route-link"
                >
                  company
                </NavLink>
              </li>
              <li className="nav-route reg-route">
                <NavLink
                  activeClassName="active-route"
                  to="/contact"
                  className="route-link"
                >
                  contact
                </NavLink>
              </li>

              {/* routes with icons */}
              <li className="nav-route icon-route wishlist">
                <NavLink
                  activeClassName="active-route"
                  to="/wishlist"
                  className="route-link"
                >
                  <IoHeartOutline title="Your wishlist" />
                  {wishlist.length > 0 && (
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
                >
                  <IoBagOutline title="Your shopping bag" />
                  {bagList.length > 0 && (
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
          </div>
        </div>
      </nav>
    </Container>
  );
};

const mapStateToProps = ({
  bag: { bagList },
  wishlist: { wishlist },
}: any) => ({
  bagList: bagList,
  wishlist: wishlist,
});

export default connect(mapStateToProps)(DefaultHeaderNav);
