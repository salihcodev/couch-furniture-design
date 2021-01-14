// BASIC:
import './style.sass';

// UTILITIES:
import { Col, Container, Row } from 'react-bootstrap';

// IMPORT COMPONENTS:
import FooterLinksBlock from './footer-contact/FooterContact.comp';
import FooterContact from './footer-links-blocks/FooterLinksBlock.comp';

// INTERFACE:
interface Props {}

// COMPONENT:=>
const DefaultFooter: React.FC<Props> = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={7} xl={8}>
          <FooterContact />
        </Col>
        <Col sm={12} md={5} xl={4}>
          <FooterLinksBlock />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultFooter;
