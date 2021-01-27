// BASIC:
import './style.sass';

// UTILITIES:
import { Container } from 'react-bootstrap';

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
    <section className="collection-viewer">
      {/* products block */}
      <Container fluid>
        <div className="collection-items">
          {products.map(({ id, ...product }: any) => (
            <ProdCard key={id} product={product} parentRoute={parentRoute} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CollectionViewer;
