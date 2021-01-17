// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import ProdsWrapper from '../../components/prods-wrapper/ProdsWrapper.comp';
import ProdsFilter from '../../components/prods-filter/ProdsFilter.comp';
import MostHitProd from '../../components/most-hit-prod/MostHitProd.comp';

// INTERFACE:
interface ShopPageProps {}

// Home Page:=>
const Shop: React.FC<ShopPageProps> = () => {
  return (
    <main className="shop-page">
      {/* Hero */}
      <Hero cover={''} mini heroTitle="Proud to introduce our products." />

      {/* Page body */}
      <Container fluid>
        <Row>
          {/* filter section */}
          <Col sm={12} md={12} xl={2}>
            <ProdsFilter />
          </Col>

          {/* shop prods wrapper */}
          <Col sm={12} md={8} xl={8}>
            <ProdsWrapper />
          </Col>

          {/* right hans side column, show most hit prod & display ads. */}
          <Col sm={12} md={4} xl={2}>
            <aside className="most-hit-and-ads">
              <MostHitProd />
              {/* ads for ex: */}
            </aside>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Shop;
