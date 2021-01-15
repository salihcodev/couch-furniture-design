// BASIC:
import './style.sass';

// UTILITIES:
import { Container } from 'react-bootstrap';
import servicesList from '../../components-data/servicesList';

// INTERFACE:
interface ServicesProps {}

// COMPONENT:=>
const Services: React.FC<ServicesProps> = () => {
  return (
    <section className="services-wrapper">
      <Container>
        <h3 className="services-title">
          We make elite modern furniture for the contemporary home.
        </h3>
        <ul className="services-list">
          {servicesList.map(({ icon, description }) => (
            <li>
              <span className="icon">{icon}</span>
              <p className="description">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Services;
