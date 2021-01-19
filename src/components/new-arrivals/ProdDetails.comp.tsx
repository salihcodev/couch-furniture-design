// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// COMPONENTS:
import SliderItemProps from '../slider-item/SlideItem.comp';

// INTERFACE:
interface NewArrivalsProps {
  newArrivals: any;
}

// COMPONENT:=>
const NewArrivals: React.FC<NewArrivalsProps> = ({ newArrivals }) => {
  const items = newArrivals.map(({ imgUrl }: any) => (
    <SliderItemProps img={imgUrl} idx={5} withStyle />
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    769: { items: 2 },
    990: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <section className="new-arrivals">
      <Container>
        <h2 className="heading">
          <Link to="new">new arrivals</Link>
        </h2>
        <Row>
          <Col sm={12} md={4} lg={3}>
            <div className="text">
              <p>New item has been add to the stock market.</p>
            </div>
          </Col>
          <Col sm={12} md={8} lg={9}>
            <section className="new-items-slider">
              <AliceCarousel
                mouseTracking
                autoPlay
                autoPlayControls={false}
                autoPlayStrategy="none"
                autoPlayInterval={5000}
                animationDuration={500}
                animationType="slide"
                infinite
                touchTracking
                disableDotsControls
                disableButtonsControls
                items={items}
                responsive={responsive}
              />
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const mapStateToProps = ({ products: { itemsToTest } }: any) => ({
  newArrivals: itemsToTest,
});

export default connect(mapStateToProps)(NewArrivals);
