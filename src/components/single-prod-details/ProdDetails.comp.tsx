// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';
import { MdLocalShipping } from 'react-icons/md';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';

// COMPONENTS:

// INTERFACE:
interface SingleProdViewerProps {
  singleProduct: any;
}

// COMPONENT:=>
const SingleProdDetails: React.FC<SingleProdViewerProps> = ({
  singleProduct,
}) => {
  const {
    id,
    name,
    availableColors,
    description,
    details,
    featured,
    freeShipping,
    imgUrl,
    slug,
    onlineReturnPolicy,
    returnAndExchange,
  } = singleProduct;

  return (
    <section className="single-prod-details">
      <Container>
        <h2 className="heading">
          More Details About <span className="prod-name">{name}</span>
        </h2>
        <section className="prod-desc">
          <h5 className="heading">Description</h5>
          <p className="desc">{description}</p>
        </section>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <section className="details">
              <h5 className="heading">Details</h5>
              <ul>
                {details.map((detail: string) => (
                  <DetailsItem detail={detail} />
                ))}
              </ul>
            </section>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <section className="online-policy">
              <h5 className="heading">Online return policy</h5>
              <p>{onlineReturnPolicy}</p>
            </section>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <section className="more-about-prod">
              <h5 className="heading">More</h5>
              <div className="free-shipping">
                {freeShipping && (
                  <p>
                    <span className="icon">
                      <MdLocalShipping />
                    </span>
                    <span className="txt">30 days return policy</span>
                  </p>
                )}
              </div>
              <div className="return">
                {returnAndExchange && (
                  <p>
                    <span className="icon">
                      <IoArrowRedoCircleOutline />
                    </span>
                    <span className="txt">Free shipping & returns</span>
                  </p>
                )}
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// internal details list item:
interface DetailsItemProps {
  detail: string;
}

const DetailsItem: React.FC<DetailsItemProps> = ({ detail }) => (
  <li className="details-item">{detail}</li>
);

export default SingleProdDetails;
