// BASIC:
import './style.sass';

// UTILITIES:
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { WiStars } from 'react-icons/wi';
import { IoBag } from 'react-icons/io5';
import { connect } from 'react-redux';
import { addItemToBag } from '../../redux/bag/bag.action';
import { Link } from 'react-router-dom';

// COMPONENTS:
import SliderItem from '../slider-item/SlideItem.comp';
import SudoButton from '../sudo-button/SudoButton.comp';

// INTERFACE:
interface SingleProdViewerProps {
  singleProduct: any;
  dispatch: any;
}

// COMPONENT:=>
const SingleProdViewer: React.FC<SingleProdViewerProps> = ({
  singleProduct,
  dispatch,
}) => {
  const {
    images,
    name,
    price,
    simiDesc,
    dispatchAs,
    provisional,
    sippingAs,
    availableColors,
    featured,
  } = singleProduct;

  const items = images.map((img: any, idx: any) => (
    <SliderItem img={img} idx={idx} key={idx} />
  ));

  const [requestedQuantity, setRequestedQuantity] = useState<number>(1);

  const handelItemQuantity = (e: any) => {
    const { value } = e.target;
    setRequestedQuantity(+value);
  };

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
                  <span className="period">{dispatchAs} </span> working days
                </p>
                <p className="provisional">
                  Provisional delivery : <strong>{provisional}</strong>
                </p>
                <small className="shipping-as">Shipping as a {sippingAs}</small>
              </div>
              <div className="more-about-this-prod">
                {featured && (
                  <div className="isFeatured">
                    <div className="featured">
                      <span className="icon">
                        <WiStars />
                      </span>
                      <span className="txt">This product is featured</span>
                    </div>
                  </div>
                )}
                <div className="available-colors">
                  <h5>Available colors</h5>
                  <ul>
                    {availableColors.map((clr: string) => (
                      <li style={{ background: clr }}></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="add-to-bag">
                <div className="quantity">
                  <small>Quantity</small>
                  <input
                    type="number"
                    name="quantity"
                    id="add-to-bag"
                    inputMode="decimal"
                    placeholder="1"
                    min="1"
                    max="8"
                    onChange={handelItemQuantity}
                  />
                </div>
                <SudoButton>
                  <Link
                    to="/bag"
                    className="sudo-btn"
                    onClick={() =>
                      dispatch(
                        addItemToBag({
                          product: singleProduct,
                          count: requestedQuantity,
                        })
                      )
                    }
                  >
                    <span className="txt">In the bag</span>
                    <span className="icon">
                      <IoBag />
                    </span>
                  </Link>
                </SudoButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default connect()(SingleProdViewer);
