// BASIC:
import './style.sass';

// UTILITIES:
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProdCard from '../../prod-card/ProdCard.comp';

// INTERFACE:
interface SingleCollectionProps {
  title: string;
  routeName: string;
  products: Array<[]>;
}

// COMPONENT:=>
const SingleCollection: React.FC<SingleCollectionProps> = ({
  title,
  routeName,
  products,
}) => {
  return (
    <section className="single-collection">
      <h3 className="collection-title">
        <Link to={routeName}>{title}</Link>
      </h3>
      {/* products block */}

      <div className="collection-items">
        <Row>
          {products.map(({ id, ...product }: any) => (
            <Col xs={12} sm={6} xl={4}>
              <ProdCard key={id} product={product} parentRoute={routeName} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default SingleCollection;
