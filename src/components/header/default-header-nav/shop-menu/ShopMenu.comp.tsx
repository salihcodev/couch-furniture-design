// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';
import { ReactComponent as ShopDropdown } from '../../../../assets/abstracted-svg/dropdown.svg';

// IMPORT COMPONENTS:
import ShopMenuBlock from './shop-menu-block/ShopMenuBlock.comp';
import { Col, Row } from 'react-bootstrap';

// INTERFACE:
interface Props {
  shopRoutes: Array<[]>;
}

// COMPONENT:=>
const ShopMenu: React.FC<Props> = ({ shopRoutes }) => {
  return (
    <main className="shop-list-wrapper">
      {/* to make whole block hoverable */}
      <span className="to-show"></span>
      <Row>
        <Col md={8} lg={9}>
          <section className="shop-routes">
            {/* shop menu block */}
            {shopRoutes.map((block: any) => {
              return <ShopMenuBlock {...block} key={block.route} />;
            })}
          </section>
        </Col>

        <Col md={4} lg={3}>
          <ShopDropdown />
        </Col>
      </Row>
    </main>
  );
};

const mapStateToProps = (props: any) => ({
  shopRoutes: props.routes.shopRoutes,
});

export default connect(mapStateToProps)(ShopMenu);
