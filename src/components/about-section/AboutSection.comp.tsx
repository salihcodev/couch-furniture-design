// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';
import FounderAvatar from '../../assets/about/the-founder.jpg';

// INTERFACE:
interface AboutSectionProps {}

// COMPONENT:=>
const AboutSection: React.FC<AboutSectionProps> = ({}) => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col md={12} lg={7} xl={6}>
            <div className="founder-txt">
              <h2 className="heading">Meet @Couch startup founder</h2>
              <p className="founder-desc">
                Founder Norrie Daroga was the <strong>CEO</strong> of a company
                in the elder care marketing and was looking for a scalable
                solution to gather nuanced information from family caregivers
                with an emphasis on privacy, education, and compassion.{' '}
                <em>
                  Co-Founder Mark Stephen Meadows had published a book, ‘I,
                  Avatar’ and was interested in pushing the role of Virtual
                  Service Avatars into new territory.
                </em>
                The two joined forces in 2012, gained access to{' '}
                <span className="mark">
                  <a href="#">IBM’s Watson platform</a>
                </span>{' '}
                in 2015, and developed a fully interactive, compassionate, and
                highly effective health assistant, serving some of the largest
                healthcare companies in North America.
              </p>
              <p className="more-about-founder">
                <small>
                  Mark has since moved on to other projects, while Norrie
                  remains at the helm of the formerly named idAvatars now known
                  as Nfinity Avatars.
                </small>
              </p>
              <p className="more-about-founder">
                <strong>
                  <em>
                    {' '}
                    In 2001, two doctors in Canada developed proprietary tools
                    which allowed clients to implement beautifully animated
                    training courses and tutorials without much technology
                    expertise.
                  </em>
                </strong>{' '}
                They called the venture CodeBaby and built a company that
                leveraged emotional engagement and gaming expertise to drive
                interaction and retention for Fortune 500 customers within
                healthcare, financial services, banking, and{' '}
                <span className="mark">
                  <a href="#">eCommerce</a>
                </span>
              </p>
            </div>
          </Col>
          <Col md={12} lg={5} xl={6}>
            <div className="founder-img">
              <div className="img-wrapper">
                <img
                  src={FounderAvatar}
                  alt="The founder avatar"
                  title="The founder avatar"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
