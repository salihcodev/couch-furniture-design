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
const Company: React.FC<Props> = () => {
  return (
    <div className="company-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="About us"
        heroDesc={`/home${useLocation().pathname}`}
        heroDescWeight="normal"
      />
    </div>
  );
};

export default Company;
