// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS:
import ListItemReviewer from './list-item-reviewer/ListItemReviewer.comp';
import MiniSliderList from '../mini-slider-list/MiniSliderList.comp';

// INTERFACE:
interface WishlistWrapperProps {
  wishlist: Array<[]>;
}

// COMPONENT:=>
const WishlistWrapper: React.FC<WishlistWrapperProps> = ({ wishlist }) => {
  console.log(wishlist);

  return (
    <section className="wishlist-wrapper">
      <Container>
        <h3 className="heading">Items you wished list</h3>
        <Row>
          <Col sm={12} lg={8}>
            <ul className="list-container">
              {wishlist?.map(({ id, ...product }: any) => (
                <ListItemReviewer key={id} {...product} />
              ))}
            </ul>
          </Col>
          <Col sm={12} lg={4}>
            <MiniSliderList
              title="recommended for you."
              desc="based on you interacts."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = ({ wishlist: { wishlist } }: any) => ({
  wishlist: wishlist,
});

export default connect(mapStateToProps)(WishlistWrapper);
