// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// IMPORT COMPONENTS:
import { ReactComponent as Logo } from '../../../assets/couchFurnitureDesign.logo-min.svg';

// INTERFACE:
interface Props {}

// COMPONENT:=>
const SubFooter: React.FC<Props> = () => {
  return (
    <Container fluid>
      <section className="sub-footer">
        <Row>
          <Col>
            <div className="rights-and-language">
              <p className="rights-phrase">
                @Allrights reserved to{' '}
                <a
                  href="https://twitter.com/salihcodev"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  couch inc.
                </a>
                {'  '}
                2020 - {new Date().getFullYear()}
              </p>
              <div className="switch-language">
                <select name="select-language" id="">
                  <option value="Select language" selected disabled>
                    Select language
                  </option>
                  <option value="Arabic">Arabic</option>
                  <option value="English">English</option>
                </select>
              </div>
            </div>
          </Col>
          <Col>
            <div className="company-brand">
              <div className="logo">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default SubFooter;
