// BASIC:
import './style.sass';

// UTILITIES:
import { useLocation } from 'react-router-dom';
// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const Contact: React.FC<Props> = () => {
  return (
    <div className="contact-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="Keep in touch"
        heroDesc={`/home${useLocation().pathname}`}
        heroDescWeight="normal"
      />
    </div>
  );
};

export default Contact;
