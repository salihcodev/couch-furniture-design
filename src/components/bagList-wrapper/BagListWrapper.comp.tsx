// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS:
import ListItemReviewer from './list-item-reviewer/ListItemReviewer.comp';
import BagInfoViewer from '../bag-info-viewer/BagInfo.comp';

// INTERFACE:
interface BagListWrapperProps {
  bagList: Array<[]>;
}

// COMPONENT:=>
const BagListWrapper: React.FC<BagListWrapperProps> = ({ bagList }) => {
  return (
    <section className="bagList-wrapper">
      <Container>
        <h3 className="heading">Items you moved to bag</h3>
        <Row>
          <Col sm={12} lg={8}>
            <ul className="list-container">
              {bagList?.map(({ id, ...product }: any) => (
                <ListItemReviewer key={id} {...product} />
              ))}
            </ul>
          </Col>
          <Col sm={12} lg={4}>
            <BagInfoViewer />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = ({ bag: { bagList } }: any) => ({
  bagList: bagList,
});

export default connect(mapStateToProps)(BagListWrapper);
