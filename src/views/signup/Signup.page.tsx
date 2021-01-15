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
const Signup: React.FC<Props> = () => {
  return (
    <div className="signup-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="We are happy for joining you our community :)"
        heroDesc={`/home${useLocation().pathname}`}
        heroDescWeight="normal"
      />
    </div>
  );
};

export default Signup;
