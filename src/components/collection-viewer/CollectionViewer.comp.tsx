// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS:
import ProdCard from '../prod-card/ProdCard.comp';

// INTERFACE:
interface CollectionViewerProps {
  parentRoute: string;
  products: Array<[]>;
}

// COMPONENT:=>
const CollectionViewer: React.FC<CollectionViewerProps> = ({
  parentRoute,
  products,
}) => {
  return (
    <section className="single-collection">
      {/* products block */}
      <div className="collection-items">
        <Container fluid>
          <Row>
            {products.map(({ id, ...product }: any) => (
              <Col xs={12} sm={6} md={4} xl={3}>
                <ProdCard
                  key={id}
                  product={product}
                  parentRoute={parentRoute}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default CollectionViewer;
