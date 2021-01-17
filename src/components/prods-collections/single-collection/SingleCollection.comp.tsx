// BASIC:
import './style.sass';

// UTILITIES:
import { Row, Col } from 'react-bootstrap';

// INTERFACE:
interface SingleCollectionProps {}

// COMPONENT:=>
const SingleCollection: React.FC<SingleCollectionProps> = () => {
  return <section className="single-collection">single collection</section>;
};

export default SingleCollection;
