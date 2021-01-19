// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// COMPONENTS:
import SliderItem from '../slider-item/SlideItem.comp';

// INTERFACE:
interface SingleProdViewerProps {
  singleProduct: any;
}

// COMPONENT:=>
const SingleProdViewer: React.FC<SingleProdViewerProps> = ({
  singleProduct,
}) => {
  const {
    images,
    name,
    price,
    simiDesc,
    dispatch,
    provisional,
    sippingAs,
  } = singleProduct;

  const items = images.map((img: any, idx: any) => (
    <SliderItem img={img} idx={idx} key={idx} />
  ));

  return (
    <section className="single-prod-viewer">
      <Container>
        <Row>
          <Col sm={12} lg={7} xl={8}>
            <div className="wing prod-imgs">
              <AliceCarousel
                mouseTracking
                autoPlay
                autoPlayControls={false}
                autoPlayStrategy="none"
                autoPlayInterval={5000}
                animationDuration={500}
                animationType="slide"
                infinite
                touchTracking={true}
                disableDotsControls
                disableButtonsControls={true}
                items={items}
              />
            </div>
          </Col>
          <Col sm={12} lg={5} xl={4}>
            <div className="wing prod-info">
              <div className="basic">
                <h3 className="prod-title">{name}</h3>
                <p className="simi-desc">{simiDesc}</p>
              </div>
              <div className="price">
                <h2 className="number">
                  <span>{price} €</span>
                </h2>
                <p className="payments-info">
                  <span className="pay-calc">
                    {(price / 3.25).toFixed(2)} €
                  </span>{' '}
                  with 12 monthly payments
                </p>
              </div>
              <div className="shipping">
                <p className="readability">
                  Ready for dispatch in{' '}
                  <span className="period">{dispatch} </span> working days
                </p>
                <p className="provisional">
                  Provisional delivery : <strong>{provisional}</strong>
                </p>
                <small className="shipping-as">Shipping as a {sippingAs}</small>
              </div>
              <div className="add-to-bag">
                <input
                  type="number"
                  name="quantity"
                  id="add-to-bag"
                  inputMode="decimal"
                  placeholder="Quantity"
                />
                <button className="add-to-bag">In the bag</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleProdViewer;
